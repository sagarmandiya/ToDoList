// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myToDo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myToDo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the Market",
  //     desc: "You need to buy eggs from the market. "
  //   },
  //   {
  //     sno: 2,
  //     title: "Meeting with Boss",
  //     desc: "You need to call back boss. "
  //   },
  //   {
  //     sno: 3,
  //     title: "Swimming Lessons",
  //     desc: "You need o attend swimming lessons at 5pm every Thursday. "
  //   }
  // ]);

  return (
    <>
      <Router>
        <Header title="My ToDo List" searchbar={false} />

        <Switch>
          <Route
            exact path="/"
            render = {() => {
              return (
                <>
                  <AddTodo addToDo={addToDo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          >
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
