import { Container } from "@mui/material";
import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { calSchema } from "./calSchema";
import { useDispatch, useSelector } from "react-redux";
import { addCalHistory, clearHistory } from "../../redux/actions/calActions";
import { v4 as uuid } from "uuid";

const Calculator = () => {
  const [totalVal, setTotalVal] = useState(0);
  const [showH, setShowH] = useState(false);
  const { history } = useSelector((state) => state.calHistroy);
  const dispatch = useDispatch();

  console.log(history);

  const handleShow = () => {
    setShowH(!showH);
    console.log("running", showH)
  };

  const handleClearHistory = () => {
    dispatch(clearHistory());
    setShowH(false);
  };

  console.log(totalVal);





  return (
    <div className="mainCon">
      <Container maxWidth="xl" className="calContainer">
        <Formik
          initialValues={{
            num1: "",
            num2: "",
            result: "",
            select: "",
          }}
          validationSchema={calSchema}
          onSubmit={(values) => {
            if (values.select === "add") {
              setTotalVal(values.num1 + values.num2);
              values.select = "+";
              dispatch(
                addCalHistory({
                  id: uuid(),
                  ...values,
                  result: values.num1 + values.num2,
                })
              );
            } else if (values.select === "sub") {
              setTotalVal(values.num1 - values.num2);
              values.select = "-";
              dispatch(
                addCalHistory({
                  id: uuid(),
                  ...values,
                  result: values.num1 - values.num2,
                })
              );
            } else if (values.select === "mul") {
              setTotalVal(values.num1 * values.num2);
              values.select = "*";
              dispatch(
                addCalHistory({
                  id: uuid(),
                  ...values,
                  result: values.num1 * values.num2,
                })
              );
            } else if (values.select === "div") {
              setTotalVal(values.num1 / values.num2);
              values.select = "/";
              dispatch(
                addCalHistory({
                  id: uuid(),
                  ...values,
                  result: values.num1 / values.num2,
                })
              );
            }

            //  console.log({...values, result: totalVal});
          }}
        >
          {({ handleChange, handleSubmit, values, handleBlur, resetForm }) => (
            <form className="calWrapper" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <label htmlFor="num1" style={{ color: "white" }}>
                  Number 1:{" "}
                </label>
                <input
                  onBlur={handleBlur}
                  value={values.num1}
                  onChange={handleChange}
                  placeholder="0"
                  type="number"
                  name="num1"
                />
                <span className="errorMsg">
                  <ErrorMessage name="num1" />
                </span>
              </div>

              <div className="inputWrapper">
                <label htmlFor="num1" style={{ color: "white" }}>
                  Number 2:{" "}
                </label>
                <input
                  onBlur={handleBlur}
                  value={values.num2}
                  placeholder="0"
                  onChange={handleChange}
                  type="number"
                  name="num2"
                />
                <span className="errorMsg">
                  <ErrorMessage name="num2" />
                </span>
              </div>

              <div className="inputWrapper">
                <label
                  htmlFor="num1"
                  style={{ color: "rgb(231 237 6)", fontWeight: "bold" }}
                >
                  Result:
                </label>
                <input
                  onBlur={handleBlur}
                  value={totalVal}
                  placeholder="0"
                  onChange={handleChange}
                  type="number"
                  name="result"
                />
                <span className="errorMsg">
                  <ErrorMessage name="result" />
                </span>
              </div>

              <div className="selectWrapper">
                <div className="selectAndErrorWrapper">
                  <select
                    onChange={handleChange}
                    value={values.select}
                    className="select"
                    name="select"
                  >
                    <option value="">Select</option>
                    <option value="add">Addition</option>
                    <option value="sub">Subtraction</option>
                    <option value="mul">Multiplication</option>
                    <option value="div">Division</option>
                  </select>
                  <span
                    className="errorMsg"
                    style={{ color: "rgb(80 229 255)" }}
                  >
                    <ErrorMessage name="select" />
                  </span>
                </div>
                <button
                  onClick={handleShow}
                  className="historyBtn select"
                  type="button"
                >
                  history
                </button>
              </div>

              {/* History Data */}
                
                {
                history.length > 0 ? (
                  <div className={showH ? "historyData" : "historyData d-none"  }>
                    {history.map((history, index) => {
                      return (
                        <p className="historyHeading" key={history.id}>
                          <span>{index + 1}.</span> {history.num1}{" "}
                          {history.select} {history.num2} = {history.result}{" "}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: "white" }}>No history...</p>
                )}

              {/* {showH &&
                (history.length > 0 ? (
                  <div className="historyData">
                    {history.map((history, index) => {
                      return (
                        <p className="historyHeading" key={history.id}>
                          <span>{index + 1}.</span> {history.num1}{" "}
                          {history.select} {history.num2} = {history.result}{" "}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: "white" }}>No history...</p>
                ))} */}

              {/* end */}

              {/* Clear history button */}

              {showH && history.length > 0 ? (
                <button
                  className="btn"
                  onClick={handleClearHistory}
                  style={{ backgroundColor: "red", color: "white" }}
                  type="button"
                >
                  Clear history
                </button>
              ) : null}

              {/* end */}

              <button className="submitBtn btn" type="submit">
                Calculate
              </button>
              <button
                className="clearBtn btn"
                onClick={() => {
                  resetForm();
                  setTotalVal(0);
                }}
                type="button"
              >
                Clear all
              </button>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Calculator;
