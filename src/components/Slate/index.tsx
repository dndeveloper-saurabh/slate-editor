"use client";

import React, { useState } from "react";

import { createEditor } from "slate";

import { Slate, Editable, withReact } from "slate-react";
import { CustomElement } from "../../../types/slate";
import MarkdownShortcutsExample from "./markdown";

const initialValue: CustomElement[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const SlateEditor = () => {
  //   const [editor] = useState(() => withReact(createEditor()));

  return (
    // <Slate editor={editor} initialValue={initialValue}>
    //   <Editable />
    // </Slate>
    <MarkdownShortcutsExample />
  );
};

export default SlateEditor;

//  Now, we have a basic Slate editor in our application.
//  But, we need to add some styles to make it look better.
//  Let's add some styles to our Slate editor.
//  Step 4: Add styles to the Slate editor
//  We will add some styles to our Slate editor to make it look better.
//  We will add the following styles to our Slate editor.
