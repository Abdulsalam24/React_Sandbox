import React, { useEffect, useRef, useState } from "react";

function UseRefExample2() {
  const [text, setText] = useState("");
  const render = useRef(1);
  const prev = useRef("");

  useEffect(() => {
    render.current = render.current + 1;
    prev.current = text;
  }, [text]);

  return (
    <form className="form-control mt-5 w-80px">
      <h2>Render : {render.current} </h2>
      <h2>Prev value : {prev.current} </h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default UseRefExample2;
