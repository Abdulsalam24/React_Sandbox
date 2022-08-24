import React, { useEffect, useState } from "react";

function LocalStorageExample() {
  const [text, setText] = useState("");
  const [updateOn, setUpdateOn] = useState(false);

  const [users, setUsers] = useState(() => {
    const usersData = localStorage.getItem("tasks");
    return usersData ? JSON.parse(usersData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(users));
  }, [users]);

  console.log(text, "textr");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: text,
      id: Math.floor(Math.random(1) * 100),
    };
    if (text !== "") {
      setUsers([...users, userData]);
      setText("");
    } else {
      alert("please input something");
    }
  };

  const handleClear = () => {
    setUsers([]);
  };

  const handleDelete = (e) => {
    setUsers(users.filter((user) => user.id !== e));
  };

  const handleEdit = (e) => {
    
    setUpdateOn(!setUpdateOn);
    setText(users.map((user) => user.id === e.id ? e.name : "."));
    // console.log(users.map((item) => item.id === e.id ? e.name : "False ni") , 'before',e , 'after')
  };

  return (
    <div>
      <div className="d-flex flex-column gap-2 mt-4 form-control w-30 py-2">
        <input
          type="text"
          id="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control w-10"
        />
        <div className="d-flex gap-1 my-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Save to local
          </button>
          <button className="btn btn-primary" onClick={handleClear}>
            Clear
          </button>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>

              <button
                className={`btn ${
                  updateOn ? "btn-important" : "btn-secondary "
                }`}
                onClick={() => handleEdit(user)}
              >
                {updateOn ? "Update" : "Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocalStorageExample;
