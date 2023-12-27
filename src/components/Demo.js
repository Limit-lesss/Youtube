import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  console.log("hello")
  return (
    <div className="p-2 absolute top-20 left-10 w-96 h-96  border-black border-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-10 px-2 text-lg w-3/4 outline-none border-2 border-red-400"
      />
    </div>
  );
};

export default Demo;
