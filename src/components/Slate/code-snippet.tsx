import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import React from "react";

export default function CodeSnippet() {
  const onChange = React.useCallback((value: string) => {
    console.log("value:", value);
  }, []);

  const handleKeyDown = (event) => {
    event.stopPropagation();
  };

  const handleKeyUp = (event) => {
    event.stopPropagation();
  };

  const handleKeyPress = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onKeyPress={handleKeyPress}
    >
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        editable={true}
      />
    </div>
  );
}
