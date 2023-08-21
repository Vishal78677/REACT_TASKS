import React, { useEffect, useState } from "react";
import "./style.css";
import Container from "@mui/material/Container";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { todoSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  clearAll,
  deleteTodo,
  editTodo,
  setShow,
} from "../../redux/actions/action";

const Todo = () => {
  //   const [show, setShow] = useState(false);
  const { todos, show } = useSelector((state) => state.todo);
  const [textValue, setTextValue] = useState("");
  // console.log(show);
  const [updateId, setUpdateId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   Back to home

  const handleNavigate = () => {
    navigate("/");
  };

  // Delete todo

const handleDelete = (id) => {
  
  dispatch(deleteTodo(id));

};


 // Input change
 
 const handleChange = (e)=> {
  // debugger
  setTextValue(e.target.value);
  
 }

  //   Edit todo
  
  const handleEdit = (todo) => {
    // setShow(true);
    // values.todo = todo.todo;
    setUpdateId(todo.id);
    dispatch(editTodo(true));
    console.log(todo);

  };

  // handle clear all

  const handleClearAll = () => {
   
    dispatch(clearAll());


  }
  



  useEffect(() => {
    dispatch(setShow(false));
  }, []);

  return (
    <div className="todoCon">
      <Container maxWidth="xl" className="mainCon">
        <h1 className="todoHeading">Todo App</h1>

        <Formik
          initialValues={{ todo:  textValue }}
          validationSchema={todoSchema}
          onSubmit={(values) => {
            console.log(values);

            setTextValue("");

            if (values.todo.length > 0) {
              dispatch(
                addTodo({ id: uuid(), updateId: updateId, todo: values.todo })
              );

              values.todo = "";
            }
          }}
        >
          {(props) => (
            <form className="formCon" onSubmit={props.handleSubmit}>
              <div className="inputBtnWrapper">
                <input
                  className="input"
                  name="todo"
                  value={textValue}
                  onChange={(e)=> { handleChange(e); props.handleChange(e)}}
                  placeholder="write..."
                  // onBlur={props.handleBlur}
                />

                {show ? (
                  <button className="btnAdd" type="submit">
                    Update todo
                  </button>
                ) : (
                  <button className="btnAdd" type="submit">
                    Add todo
                  </button>
                )}
              </div>
              <p style={{ color: "red" }}>
                <ErrorMessage name="todo" />
              </p>

            </form>
          )}
        </Formik>
              <div className="todosContainer">
                {todos.length > 0 &&
                  todos.map((todo) => {
                    return (
                      <div className="todoWrapper" key={todo.id}>
                        <span className="todoText">{todo.todo}</span>
                        <div className="btnWrapper">
                          <button
                            className="btn edit"
                            type="button"
                            onClick={() => {
                              setTextValue(todo.todo);
                              handleEdit(todo);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn delete"
                            type="button"
                            onClick={() =>  handleDelete(todo.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}

                {todos.length <= 0 && <p> No todos...</p>}
              </div>

        <button onClick={handleClearAll} className="backHome">
           Clear All 
        </button>
      </Container>
    </div>
  );
};

export default Todo;
