import { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();

const MathQuill = () => {
  const [latex, setLatex] = useState(
    "\\frac{a}{b}sin^{- 1}left(x\\right) = left|\\begin{array}{cc} a & 0 \\ 0 & b \\  end{array}\\right|"
  );

  return (
    <div className="w-full">
      <EditableMathField
        latex={latex}
        onChange={(mathField: any) => {
          setLatex(mathField.latex());
        }}
        style={{ border: "none", boxShadow: "none" }}
      />
    </div>
  );
};

export default MathQuill;
