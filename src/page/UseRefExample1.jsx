import { useEffect, useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    return (inputRef.current.style.backgroundColor = "red");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  return (
    <div>
      <h1 className="text-center">Hello</h1>
      <form className="form-control mt-4">
        <input type="text" ref={inputRef} onChange={handleChange} /> <br />
        <button className="bg-primary mt-4" onClick={handleSubmit}>
          focus
        </button>
      </form>
    </div>
  );
}

export default UseRefExample1;
