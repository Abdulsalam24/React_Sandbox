import useFetch from "../hooks/useFetch";

function UseCustomExample() {
  const res = useFetch("https://jsonplaceholder.typicode.com/todos");

  const { data, loading, error } = res;

  console.log(data);
  return (
    <div>
      {loading ? (
        <h3>loading ...</h3>
      ) : (
        data.map((item) => <h3>{item.title}</h3>)
      )}
    </div>
  );
}

export default UseCustomExample;
