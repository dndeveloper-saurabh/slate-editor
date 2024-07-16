import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Node as SlateNode,
  Point,
  Range,
  Transforms,
  Node,
  Path,
} from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  ReactEditor,
  Slate,
  useSlateStatic,
  withReact,
} from "slate-react";
import { BulletedListElement } from "../../../types/slate";
import {
  FaArrowDown,
  FaArrowDownLong,
  FaArrowUp,
  FaArrowUpLong,
} from "react-icons/fa6";
import { CustomEditor } from "./custom-types";
import CodeSnippet from "./code-snippet";
import ResizableImage from "./ImageResizeable";
import MathQuill from "./MathQuill";

const SHORTCUTS = {
  "*": "list-item",
  "-": "list-item",
  "+": "list-item",
  ">": "block-quote",
  "#": "heading-one",
  "##": "heading-two",
  "###": "heading-three",
  "####": "heading-four",
  "#####": "heading-five",
  "######": "heading-six",
};

// @ts-ignore
const swapNodes = (editor, path1, path2) => {
  const node1 = Node.get(editor, path1);
  const node2 = Node.get(editor, path2);

  if (node1 && node2) {
    // Use JSON.stringify and JSON.parse to create deep copies of the nodes
    const tempNode1 = JSON.parse(JSON.stringify(node1));
    const tempNode2 = JSON.parse(JSON.stringify(node2));

    // Determine which path comes first to avoid path conflicts
    if (Path.compare(path1, path2) < 0) {
      // Remove the second node first if path1 comes before path2
      Transforms.removeNodes(editor, { at: path2 });
      Transforms.removeNodes(editor, { at: path1 });
      Transforms.insertNodes(editor, tempNode2, { at: path1 });
      Transforms.insertNodes(editor, tempNode1, { at: path2 });
    } else {
      // Remove the first node first if path2 comes before path1
      Transforms.removeNodes(editor, { at: path1 });
      Transforms.removeNodes(editor, { at: path2 });
      Transforms.insertNodes(editor, tempNode1, { at: path2 });
      Transforms.insertNodes(editor, tempNode2, { at: path1 });
    }
  }
};

const DropdownMenu = () => {
  const [active, setActive] = React.useState(0);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  // const dropdownRef = useRef();
  const editor = useSlateStatic();

  useEffect(() => {
    const handleShowDropdownMenu = (event: any) => {
      console.log("event.detail - ", event.detail);
      setPosition(event.detail);
      setActive(0);
      setFilteredOptions(
        options.filter((option) => option.startsWith(event.detail.query))
      );
    };

    const handleHideDropdownMenu = () => {
      setPosition(null);
      setFilteredOptions([]);
    };

    window.addEventListener("show-dropdown-menu", handleShowDropdownMenu);
    window.addEventListener("hide-dropdown-menu", handleHideDropdownMenu);

    return () => {
      window.removeEventListener("show-dropdown-menu", handleShowDropdownMenu);
      window.removeEventListener("hide-dropdown-menu", handleHideDropdownMenu);
    };
  }, [position]);

  // Handle Outside Click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as HTMLElement)
      ) {
        setPosition(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const onSelectOption = (option: "code-block") => {
    // Code Block
    // const { selection } = editor;
    // if (selection && Range.isCollapsed(selection)) {
    //   const [start] = Range.edges(selection);
    //   const { path } = start;
    //   // Replace the current element with the custom element
    //   const customElement = {
    //     type: "code-block",
    //     language: "javascript",
    //     children: [{ text: option }],
    //   };
    //   Transforms.removeNodes(editor, { at: path });
    //   // @ts-ignore
    //   Transforms.insertNodes(editor, customElement, { at: path });
    //   // Hide the dropdown menu
    //   editor.hideDropdownMenu();
    // }

    //Image Block
    // const { selection } = editor;
    // if (selection && Range.isCollapsed(selection)) {
    //   const [start] = Range.edges(selection);
    //   const { path } = start;
    //   // Replace the current element with the custom element
    //   const customElement = {
    //     type: "image-block",
    //     src: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg",
    //     children: [{ text: "" }], // Make sure to add children, as Slate expects all nodes to have children
    //   };
    //   Transforms.removeNodes(editor, { at: path });
    //   // @ts-ignore
    //   Transforms.insertNodes(editor, customElement, { at: path });
    //   // Hide the dropdown menu
    //   editor.hideDropdownMenu();
    // }

    // Math Block
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const { path } = start;
      // Replace the current element with the custom element
      const customElement = {
        type: "math-block",
        latex: "",
        children: [{ text: "" }], // Make sure to add children, as Slate expects all nodes to have children
      };
      Transforms.removeNodes(editor, { at: path });
      // @ts-ignore
      Transforms.insertNodes(editor, customElement, { at: path });
      // Hide the dropdown menu
      editor.hideDropdownMenu();
    }
  };

  useEffect(() => {
    if (!position) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        setActive((prev) => {
          if (e.key === "ArrowDown") {
            if (prev === filteredOptions.length - 1) return 0;
            return prev + 1;
          } else {
            if (prev === 0) return filteredOptions.length - 1;
            return prev - 1;
          }
        });
      }

      if (e.key === "Enter") {
        e.preventDefault();
        onSelectOption("code-block");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredOptions, position]);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    }
  }, [active]);

  if (!position) return null;

  return (
    <span
      ref={containerRef}
      style={{
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
      className="absolute border border-gray-600 shadow-lg left-0 top-6 z-10 block max-h-64 w-64 select-none overflow-y-auto rounded-md bg-base-100 bg-white p-2 overflow-auto"
    >
      {filteredOptions.map((item, index) => (
        <div
          key={item}
          onMouseEnter={() => setActive(index)}
          contentEditable={false}
          className={`p-2 cursor-pointer ${
            active === index ? "bg-gray-200" : ""
          }`}
          ref={(ref) => {
            if (active === index) {
              activeRef.current = ref;
            }
          }}
        >
          {item}
        </div>
      ))}
      {filteredOptions.length === 0 && <div>No results found</div>}
    </span>
  );
};

const options = [
  "image",
  "important",
  "improve",
  "immediate",
  "implement",
  "import",
  "impress",
];
const DropdownMenu1 = ({ editor }: { editor: CustomEditor }) => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [filteredOptions, setFilteredOptions] = useState([]);
  // const dropdownRef = useRef();

  useEffect(() => {
    const handleShowDropdownMenu = (event: any) => {
      console.log("event.detail - ", event.detail);
      setPosition(event.detail);
      setFilteredOptions(
        options.filter((option) => option.startsWith(event.detail.query))
      );
    };

    const handleHideDropdownMenu = () => {
      setPosition(null);
      setFilteredOptions([]);
    };

    window.addEventListener("show-dropdown-menu", handleShowDropdownMenu);
    window.addEventListener("hide-dropdown-menu", handleHideDropdownMenu);

    return () => {
      window.removeEventListener("show-dropdown-menu", handleShowDropdownMenu);
      window.removeEventListener("hide-dropdown-menu", handleHideDropdownMenu);
    };
  }, []);

  if (!position) return null;

  return (
    <div
      // ref={dropdownRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        backgroundColor: "white",
        border: "1px solid #ccc",
        zIndex: 1000,
      }}
    >
      <div>
        {filteredOptions.map((option) => (
          <p key={option}>{option}</p>
        ))}
        {filteredOptions.length === 0 && <p>No results found</p>}
      </div>
    </div>
  );
};
const TEXT_COLOR_MARK = "color";
const isColorActive = (editor: any, color: any) => {
  const [match] = Array.from(
    Editor.nodes(editor, {
      // @ts-ignore
      match: (n) => n[TEXT_COLOR_MARK] === color,
      mode: "all",
    })
  );
  return !!match;
};
const MarkdownShortcutsExample = () => {
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    []
  );
  const [value, setValue] = useState(initialValue);
  const moveUp = useCallback(() => {
    console.log("value - ", value);

    if (editor.selection) {
      // @ts-ignore
      const isActive = isColorActive(editor, "#ff5e4c");
      // Transforms.setNodes(
      //   editor,
      //   // @ts-ignore
      //   { [TEXT_COLOR_MARK]: "#ff5e4c" },
      //   // @ts-ignore
      //   { match: Text.isText, split: true }
      // );
      Editor.addMark(editor, TEXT_COLOR_MARK, "#ff5e4c");
    }
  }, [editor, value]);

  const renderLeaf = (props) => {
    const { attributes, children, leaf } = props;

    if (leaf[TEXT_COLOR_MARK]) {
      return (
        <span {...attributes} style={{ color: leaf[TEXT_COLOR_MARK] }}>
          <strong>{children}</strong>
        </span>
      );
    }

    return <span {...attributes}>{children}</span>;
  };

  const renderElement = useCallback(
    (props: any) => <Element {...props} editor={editor} />,
    [editor]
  );

  const handleDOMBeforeInput = useCallback(
    (e: InputEvent) => {
      queueMicrotask(() => {
        const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

        const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
          if (!diff.text.endsWith(" ")) {
            return false;
          }

          const { text } = SlateNode.leaf(editor, path);
          const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
          if (!(beforeText in SHORTCUTS)) {
            return;
          }

          const blockEntry = Editor.above(editor, {
            at: path,
            match: (n) =>
              SlateElement.isElement(n) && Editor.isBlock(editor, n),
          });
          if (!blockEntry) {
            return false;
          }

          const [, blockPath] = blockEntry;
          return Editor.isStart(editor, Editor.start(editor, path), blockPath);
        });

        if (scheduleFlush) {
          ReactEditor.androidScheduleFlush(editor);
        }
      });
    },
    [editor]
  );

  return (
    <>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onValueChange={setValue}
      >
        <Editable
          onDOMBeforeInput={handleDOMBeforeInput}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Write some markdown..."
          spellCheck
          autoFocus
        />
        <button onClick={moveUp}>Move</button>
        <DropdownMenu />
        <MathQuill />
      </Slate>
    </>
  );
};
let dropdownPosition: any = null;

const withShortcuts = (editor: Editor) => {
  const { deleteBackward, insertText, insertBreak } = editor;

  editor.insertText = (text) => {
    const { selection, path } = editor;

    // if (text.endsWith("/") && selection && Range.isCollapsed(selection)) {
    //   // Show the dropdown with few items
    //   console.log("Show the dropdown with few items - ", selection);
    //   const newProperties: Partial<SlateElement> = {
    //     type: "span",
    //     className: "menu",
    //   };
    //   Transforms.setNodes<SlateElement>(editor, newProperties, {
    //     match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
    //   });
    // }

    // if (text === "/" && selection && Range.isCollapsed(selection)) {
    //   // Show the dropdown menu
    //   const domSelection = window.getSelection();
    //   if (!domSelection) return insertText(text);
    //   const domRange = domSelection.getRangeAt(0);
    //   const rect = domRange.getBoundingClientRect();

    //   editor.showDropdownMenu({
    //     top: rect.top + window.scrollY + 20,
    //     left: rect.left + window.scrollX,
    //   });
    // } else {
    //   if (text === " " || text === "\n") {
    //     editor.hideDropdownMenu();
    //   }
    // }
    if (selection && Range.isCollapsed(selection)) {
      if ((text === " " || text === "\n") && dropdownPosition) {
        editor.hideDropdownMenu();
        dropdownPosition = null;
        insertText(text);
        console.log(" - - ");
        return;
      }

      const [start] = Range.edges(selection);
      const { path, offset } = start;
      const node = Node.get(editor, path);

      // Get the text before the current cursor position
      const beforeText = node.text.slice(0, offset);

      // Check if there is a slash before the current position
      const slashIndex = beforeText.lastIndexOf("/");

      if (slashIndex !== -1) {
        // Insert the new character
        insertText(text);

        // Calculate the query text as everything after the last slash
        const query = beforeText.slice(slashIndex + 1) + text;

        // Show or update the dropdown menu
        setTimeout(() => {
          if (!dropdownPosition) {
            const domSelection = window.getSelection();
            if (!domSelection) return insertText(text);
            const domRange = domSelection.getRangeAt(0);
            const rect = domRange.getBoundingClientRect();
            console.log("setting dropdownPosition -");
            dropdownPosition = {
              top: rect.top + window.scrollY + 20,
              left: rect.left + window.scrollX,
            };
          }
          editor.showDropdownMenu({
            ...dropdownPosition,
            query,
          });
        }, 0);

        return;
      } else if (text === "/") {
        insertText(text);

        setTimeout(() => {
          const domSelection = window.getSelection();
          if (!domSelection) return insertText(text);
          const domRange = domSelection.getRangeAt(0);
          const rect = domRange.getBoundingClientRect();
          console.log("setting dropdownPosition -");
          dropdownPosition = {
            top: rect.top + window.scrollY + 20,
            left: rect.left + window.scrollX,
          };
          editor.showDropdownMenu({
            ...dropdownPosition,
            query: "",
          });
        }, 0);

        return;
      }

      // const [start] = Range.edges(selection);
      // const { path, offset } = start;
      // const node = Node.get(editor, path);

      // // Check the text before the cursor
      // const before = Editor.before(editor, selection, { unit: "character" });
      // const beforeRange = before && Editor.range(editor, before, selection);
      // const beforeText =
      //   (beforeRange && Editor.string(editor, beforeRange)) || "";

      // console.log("beforeTexty - ", before);

      // if (beforeText.endsWith("/") || beforeText.includes("/")) {
      //   // Insert the new character
      //   insertText(text);

      //   // Calculate the query text
      //   const query = beforeText.split("/").pop() + text;

      //   // Show or update the dropdown menu
      //   setTimeout(() => {
      //     const domSelection = window.getSelection();
      //     if (!domSelection) return insertText(text);
      //     const domRange = domSelection.getRangeAt(0);
      //     const rect = domRange.getBoundingClientRect();
      //     editor.showDropdownMenu({
      //       top: rect.top + window.scrollY + 20,
      //       left: rect.left + window.scrollX,
      //       query,
      //     });
      //   }, 0);

      //   return;
      // }

      // if (
      //   text === "/" ||
      //   (beforeText.startsWith("/") && beforeText.length > 1)
      // ) {
      //   // Show the dropdown menu and filter options
      //   const query = beforeText.slice(1) + text;
      //   const domSelection = window.getSelection();
      //   if (!domSelection) return insertText(text);
      //   const domRange = domSelection.getRangeAt(0);
      //   const rect = domRange.getBoundingClientRect();

      //   editor.showDropdownMenu({
      //     top: rect.top + window.scrollY + 20,
      //     left: rect.left + window.scrollX,
      //     query,
      //   });
      // } else {
      //   // Hide the dropdown menu on space or enter
      //   if (text === " " || text === "\n") {
      //     editor.hideDropdownMenu();
      //   }
      // }
    }

    if (text.endsWith(" ") && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range) + text.slice(0, -1);
      // @ts-ignore
      const type = SHORTCUTS[beforeText];

      if (type) {
        Transforms.select(editor, range);

        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor);
        }

        const newProperties: Partial<SlateElement> = {
          type,
          className: "custom",
        };
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
        });

        if (type === "list-item") {
          const list: BulletedListElement = {
            type: "bulleted-list",
            children: [],
          };
          // @ts-ignore
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              // @ts-ignore
              n.type === "list-item",
          });
        }

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    if (
      editor.selection &&
      Editor.hasPath(editor, editor.selection.anchor.path)
    ) {
      const [node] = Editor.node(editor, editor.selection);
      if (node.type === "code-block") {
        return;
      }
    }

    const { selection } = editor;

    const { anchor } = selection;
    const block = Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
    });

    if (block) {
      const [, path] = block;
      const start = Editor.start(editor, path);

      const before = Editor.before(editor, anchor, { unit: "character" });
      const charBefore = before
        ? Editor.string(editor, { anchor: before, focus: anchor })
        : null;

      console.log("start - ", charBefore);

      // Hide the dropdown menu if the "/" is deleted
      if (charBefore === "/") {
        editor.hideDropdownMenu();
        deleteBackward(...args);
        return;
      }
    }

    if (selection && Range.isCollapsed(selection)) {
      {
        const [start] = Range.edges(selection);
        const { path, offset } = start;
        const node = Node.get(editor, path);

        // Get the text before the current cursor position
        const beforeText = node.text.slice(0, offset);

        // Check if there is a slash before the current position
        const slashIndex = beforeText.lastIndexOf("/");

        if (slashIndex !== -1) {
          // Delete the character
          deleteBackward(...args);

          // Calculate the query text as everything after the last slash
          const query = beforeText.slice(slashIndex + 1, -1);

          console.log("slashIndex - ", slashIndex);
          if (slashIndex)
            // Show or update the dropdown menu at the initial slash position
            setTimeout(() => {
              if (query === "") {
                editor.showDropdownMenu({
                  ...dropdownPosition,
                  query: "",
                });
              } else {
                if (!dropdownPosition) {
                  const domSelection = window.getSelection();
                  if (!domSelection) return;
                  const domRange = domSelection.getRangeAt(0);
                  const rect = domRange.getBoundingClientRect();
                  console.log("setting dropdownPosition -");
                  dropdownPosition = {
                    top: rect.top + window.scrollY + 20,
                    left: rect.left + window.scrollX,
                  };
                }
                editor.showDropdownMenu({
                  ...dropdownPosition,
                  query,
                });
              }
            }, 0);

          return;
        }
      }

      const match = Editor.above(editor, {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
      });

      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== "paragraph" &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<SlateElement> = {
            type: "paragraph",
          };
          Transforms.setNodes(editor, newProperties);

          if (block.type === "list-item") {
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                // @ts-ignore
                n.type === "bulleted-list",
              split: true,
            });
          }

          return;
        }
      }

      deleteBackward(...args);
    }
  };

  editor.insertFragment = (fragment) => {
    console.log("fragment - ", fragment);
  };

  editor.showDropdownMenu = (position) => {
    const event = new CustomEvent("show-dropdown-menu", { detail: position });
    window.dispatchEvent(event);
  };

  editor.hideDropdownMenu = () => {
    const event = new CustomEvent("hide-dropdown-menu");
    dropdownPosition = null;
    window.dispatchEvent(event);
  };

  editor.insertBreak = () => {
    const { selection } = editor;
    if (selection) {
      {
        const [match] = Array.from(
          Editor.nodes(editor, {
            match: (n) => SlateElement.isElement(n) && n.type === "list-item",
          })
        );

        if (match) {
          const [node, path] = match;
          const nodeString = Node.string(node);

          if (nodeString.length === 0) {
            // Get the parent path of the list item
            const parentPath = Path.parent(path);

            // Remove the empty list item
            Transforms.removeNodes(editor, { at: path });

            // Check if the parent list is now empty and should be removed
            const parentNode = Node.get(editor, parentPath);
            if (
              SlateElement.isElement(parentNode) &&
              parentNode.children.length === 0
            ) {
              Transforms.removeNodes(editor, { at: parentPath });
            }

            // Insert a new paragraph at the correct position
            const insertPath = Path.next(parentPath);
            Transforms.insertNodes(
              editor,
              {
                type: "paragraph",
                children: [{ text: "" }],
              },
              { at: insertPath }
            );

            // Move the selection to the newly created paragraph
            Transforms.select(editor, Editor.start(editor, insertPath));

            return;
          }
        }
      }

      {
        // Reset the formatting to paragraph
        const { selection } = editor;
        if (selection) {
          insertBreak();
          const [match] = Array.from(
            Editor.nodes(editor, {
              match: (n) =>
                SlateElement.isElement(n) && Editor.isBlock(editor, n),
            })
          );

          if (match) {
            const [, path] = match;
            Transforms.setNodes(editor, { type: "paragraph" }, { at: path });
          }
          return;
        }
      }
    }

    insertBreak();
  };

  return editor;
};

const Element = (props: any) => {
  const { attributes, children, element } = props;
  let el = (
    <p {...attributes} {...element}>
      {children}
    </p>
  );

  switch (element.type) {
    case "block-quote":
      el = (
        <blockquote {...attributes} {...element}>
          {children}
        </blockquote>
      );
      break;
    case "bulleted-list":
      el = (
        <ul {...attributes} {...element}>
          {children}
        </ul>
      );
      break;
    case "heading-one":
      el = (
        <h1 {...attributes} {...element}>
          {children}
        </h1>
      );
      break;
    case "heading-two":
      el = (
        <h2 {...attributes} {...element}>
          {children}
        </h2>
      );
      break;
    case "heading-three":
      el = (
        <h3 {...attributes} {...element}>
          {children}
        </h3>
      );
      break;
    case "heading-four":
      el = (
        <h4 {...attributes} {...element}>
          {children}
        </h4>
      );
      break;
    case "heading-five":
      el = (
        <h5 {...attributes} {...element}>
          {children}
        </h5>
      );
      break;
    case "heading-six":
      el = (
        <h6 {...attributes} {...element}>
          {children}
        </h6>
      );
      break;
    case "list-item":
      el = (
        <li {...attributes} {...element}>
          {children}
        </li>
      );
      break;
    case "code-block":
      el = <CodeSnippet />;
      break;
    case "image-block":
      el = <ResizableImage {...props} />;
      break;
    case "math-block":
      el = <MathQuill />;
      break;
    case "span":
      console.log("element.className - ", element.className);
      el = (
        <span
          {...attributes}
          {...element}
          className={"relative " + element.className}
        >
          {children}
          {element.className === "menu" && <PopOverContainer />}
        </span>
      );
      break;
    default:
      el = (
        <p {...attributes} {...element}>
          {children}
        </p>
      );
  }

  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  // Check if the element is a nested list item
  const isNestedListItem = path.length > 1 && path.some((p) => p !== 0);

  const moveUp = () => {
    const previousPath = Path.previous(path);
    if (Node.has(editor, previousPath)) {
      swapNodes(editor, path, previousPath);
    }
  };

  const moveDown = () => {
    const nextPath = Path.next(path);
    if (Node.has(editor, nextPath)) {
      swapNodes(editor, path, nextPath);
    }
  };

  const wrapper = (
    <div
      className="group/line relative w-full px-4 py-2"
      contentEditable={
        element.type !== "code-block" &&
        element.type !== "image-block" &&
        element.type !== "math-block"
      }
      data-slate-void={element.type === "code-block"}
    >
      {!isNestedListItem && (
        <div className="group-hover/line:opacity-100 opacity-0 absolute -left-4 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col text-sm text-gray-400">
            <div
              className="cursor-pointer px-0.5 py-1 transition-all hover:bg-gray-200 rounded"
              onClick={moveUp}
            >
              <FaArrowUp />
            </div>
            <div
              className="cursor-pointer px-0.5 py-1 transition-all hover:bg-gray-200 rounded"
              onClick={moveDown}
            >
              <FaArrowDown />
            </div>
          </div>
        </div>
      )}
      {!isNestedListItem && (
        <div className="group-hover/line:opacity-100 opacity-0 absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="tabler-icon tabler-icon-plus"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      )}
      {el}
    </div>
  );

  return wrapper;
};

const items = [
  { id: "1", name: "Math Formula" },
  { id: "2", name: "Code Snippet" },
  { id: "3", name: "Image" },
  { id: "4", name: "Table" },
  { id: "5", name: "Link" },
  { id: "6", name: "Video" },
  { id: "7", name: "Code Snippet" },
  { id: "8", name: "Image" },
  { id: "9", name: "Table" },
  { id: "10", name: "Link" },
  { id: "11", name: "Video" },
  { id: "12", name: "Code Snippet" },
  { id: "13", name: "Image" },
  { id: "14", name: "Table" },
  { id: "15", name: "Link" },
  { id: "16", name: "Video" },
];

const PopOverContainer = () => {
  const [show, setShow] = useState(true);
  return show && <PopOverElement destroy={() => setShow(false)} />;
};

const PopOverElement = ({ destroy }: { destroy: () => void }) => {
  const [active, setActive] = React.useState(0);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  // Handle Outside Click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as HTMLElement)
      ) {
        destroy();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        setActive((prev) => {
          if (e.key === "ArrowDown") {
            if (prev === items.length - 1) return 0;
            return prev + 1;
          } else {
            if (prev === 0) return items.length - 1;
            return prev - 1;
          }
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    }
  }, [active]);

  return (
    <span
      ref={containerRef}
      className="absolute border border-gray-600 shadow-lg left-0 top-6 z-10 block max-h-64 w-64 select-none overflow-y-auto rounded-md bg-base-100 bg-white p-2 overflow-auto"
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={() => setActive(index)}
          contentEditable={false}
          className={`p-2 cursor-pointer ${
            active === index ? "bg-gray-200" : ""
          }`}
          ref={(ref) => {
            if (active === index) {
              activeRef.current = ref;
            }
          }}
        >
          {item.name}
        </div>
      ))}
    </span>
  );
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      {
        text: 'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:',
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'Order when you start a line with "## " you get a level-two heading, like this:',
      },
    ],
  },
  {
    type: "heading-two",
    children: [{ text: "Try it out!" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.',
      },
    ],
  },
];

export default MarkdownShortcutsExample;
