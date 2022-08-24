import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  }, []);

  return <div>{loading ? <h3>Loading ...</h3> : <h3>{todo.title}</h3>}</div>;
}

export default Todo;
