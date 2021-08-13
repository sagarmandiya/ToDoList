import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();

        if (title && desc) {
            props.addToDo(title, desc)
            setTitle("")
            setDesc("")
        }

        else {
            alert("Please enter a title and a description!")
        }
    }

  return (
    <div className="container mt-5">
        <h3>Add New ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">
          Add ToDo
        </button>
      </form>
      <hr />
    </div>
  );
};
