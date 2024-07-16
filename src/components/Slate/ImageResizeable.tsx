import React, { useEffect } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa6";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Ensure you have the CSS for react-resizable
import { Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";

const getImageDimensions = (url: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        ratio: img.naturalWidth / img.naturalHeight,
      });
    };
    img.onerror = reject;
    img.src = url;
  });
};

const MyHandle = React.forwardRef((props, ref) => {
  const { handleAxis, ...restProps } = props;
  return (
    <div
      ref={ref}
      className={`group-hover/resize:opacity-100 opacity-0 foo handle-${handleAxis} border-gray-600`}
      {...restProps}
    />
  );
});

const alignmentClass = {
  center: "mx-auto",
  left: "",
  right: "ml-auto",
};

const ResizableImage = ({
  attributes,
  element,
  children,
}: {
  attributes: any;
  element: any;
  children: any;
}) => {
  const editor = useSlate();

  const [alignment, setAlignment] = React.useState("center");

  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(200);

  useEffect(() => {
    getImageDimensions(element.src).then((dimensions: any) => {
      const node = ReactEditor.toDOMNode(editor, element);
      const ratio = dimensions.width / dimensions.height;

      const maxWidth = node.clientWidth;
      const maxHeight = ratio > 1 ? maxWidth / ratio : maxWidth * ratio;
      setWidth(dimensions.width > maxWidth ? maxWidth : dimensions.width);
      setHeight(dimensions.height > maxHeight ? maxHeight : dimensions.height);
    });
  }, [element.src]);

  return (
    <div
      {...attributes}
      className={(attributes.className ?? "") + " relative "}
    >
      <ResizableBox
        width={width}
        height={height}
        maxConstraints={[width, height]}
        style={{ maxWidth: "100%" }}
        lockAspectRatio={true}
        handle={<MyHandle />}
        draggableOpts={{}}
        resizeHandles={["sw", "nw", "se", "ne"]}
        // @ts-ignore
        className={"group/resize " + alignmentClass[alignment]}
        onResize={(e, data) => {
          const path = ReactEditor.findPath(editor, element);
          Transforms.setNodes(
            editor,
            //@ts-ignore
            { width: data.size.width, height: data.size.height },
            { at: path }
          );
        }}
      >
        <div className="group-hover/resize:opacity-100 opacity-0 transition-all absolute z-10 top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-sm bg-gray-600 p-1 rounded text-white">
          <div
            className={
              "p-1 hover:bg-gray-500 cursor-pointer rounded " +
              (alignment === "left" ? "!bg-gray-500" : "")
            }
            onClick={() => {
              setAlignment("left");
            }}
          >
            <FaAlignLeft />
          </div>
          <div
            className={
              "p-1 hover:bg-gray-500 cursor-pointer rounded " +
              (alignment === "center" ? "!bg-gray-500" : "")
            }
            onClick={() => {
              setAlignment("center");
            }}
          >
            <FaAlignCenter />
          </div>
          <div
            className={
              "p-1 hover:bg-gray-500 cursor-pointer rounded " +
              (alignment === "right" ? "!bg-gray-500" : "")
            }
            onClick={() => {
              setAlignment("right");
            }}
          >
            <FaAlignRight />
          </div>
        </div>
        <img
          src={element.src}
          width={element.width}
          height={element.height}
          alt=""
        />
      </ResizableBox>
      {children}
    </div>
  );
};

export default ResizableImage;
