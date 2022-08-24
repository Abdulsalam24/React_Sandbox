import { useState } from "react";
import Todo from "../component/Todo";

function UseRefExample3() {

  const [view, setView] = useState(true)

  return (
    <div className="form-control mt-3">
      {view && <Todo/>}
      <div>
        <button onClick={() => setView(!view)} className="btn btn-warning">
          Mount something
        </button>
      </div>
    </div>
  );
}

export default UseRefExample3;
