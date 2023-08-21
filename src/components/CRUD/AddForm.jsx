import { ErrorMessage, Formik } from "formik";
import React from "react";
import userSchema from "./userSchema";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/userActions";
import { v4 as uuidv4 } from "uuid";

const AddForm = ({
  setShowEditModal,
  cities,
  countries,
  showEditModal,
  handleCountryChange,
  setUpdateId,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        // enableReinitialize={true}
        initialValues={{
          firstName: "",
          userName: "",
          email: "",
          password: "",
          co_password: "",
          gender: "male",
          status: false,
          country: "",
          check: false,
          dob: "",
          city: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          console.log("User added");
          setShowEditModal(false);
          dispatch(addUser({ ...values, id: uuidv4() }));

          actions.resetForm();

          console.log("submited", values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          resetForm,
          errors,
          isValid,
          dirty,
          touched,
        }) => (
          <form
            className="formCon"
            onChange={(values) => console.log(values.country)}
            onSubmit={handleSubmit}
          >
            <div className="twoInputWrapper d-flex gap-4">
              <div className="form-group">
                <label htmlFor="firstName">
                  First name <span className="required" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                />
                <p className="errorMsg">
                  <ErrorMessage name="firstName" />
                </p>

                {/* {errors.firstName && touched.firstName && <p>{errors.firstName}</p>} */}
              </div>
              <div className="form-group">
                <label htmlFor="userName">
                  User name <span className="required" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="userName"
                  onChange={handleChange}
                  value={values.userName}
                  onBlur={handleBlur}
                />

                <p className="errorMsg">
                  <ErrorMessage name="userName" />
                </p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required" />
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />

              <p className="errorMsg">
                <ErrorMessage name="email" />
              </p>
            </div>

            <div className="passwordWrapper d-flex justify-content-between">
              <div className="form-group">
                <label htmlFor="password">
                  Password <span className="required" />
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />

                <p className="errorMsg">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="co_password">
                  Confirm password <span className="required" />
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="co_password"
                  placeholder="Enter confirm password"
                  name="co_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.co_password}
                />

                <p className="errorMsg">
                  <ErrorMessage name="co_password" />
                </p>
              </div>
            </div>

            <div className="radioBtnsWrapper  d-flex justify-content-between">
              <div className="form-group d-flex">
                <div className="form-check d-flex align-items-center gap-2">
                  <label htmlFor="maleI">
                    Male <span className="required" />
                  </label>
                  <input
                    type="radio"
                    id="maleI"
                    name="gender"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={"male"}
                    checked={
                      showEditModal
                        ? gender === "male"
                          ? gender === "male"
                          : gender === "male" || values.gender === "male"
                        : values.gender === "male"
                    }
                  />

                  <p className="errorMsg">
                    <ErrorMessage name="gender" />
                  </p>
                </div>
                <div className="form-check d-flex align-items-center gap-2">
                  <label htmlFor="femaleI">
                    Female <span className="required" />
                  </label>
                  <input
                    type="radio"
                    id="femaleI"
                    name="gender"
                    value={"female"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={
                      showEditModal
                        ? gender === "female"
                          ? gender === "female"
                          : gender === "female" || values.gender === "female"
                        : values.gender === "female"
                    }
                    // checked={
                    //   showEditModal
                    //     ? gender === "female" ||  values.gender === "male"
                    //     : values.gender === "female"
                    // }
                  />

                  <p className="errorMsg">
                    <ErrorMessage name="gender" />
                  </p>
                </div>
              </div>

              <div
                className="activeRadioWrapper d-flex gap-2"
                style={{ marginLeft: "33px" }}
              >
                <span>
                  Status: <span className="required" />
                </span>

                <div className="statusWrapper d-flex" style={{gap: "2px"}}>
                  <span style={{color: "crimson"}}>Inactive</span>
                  <div className="form-check form-switch" style={{paddingLeft: "47px"}}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // defaultValue={true}
                      checked={values.status}
                      
                    />
                  </div>
                  <span style={{color: "green"}}>Active</span>
                </div>

                {/* <div className="switch">
                  <input
                    type="radio"
                    className="switch-input"
                    name="status"
                    id="active1"
                    value={"active"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.status === "active"}
                  />
                  <label
                    htmlFor="active1"
                    className="switch-label switch-label-off"
                  >
                    Active
                  </label>
                  <input
                    type="radio"
                    className="switch-input"
                    name="status"
                    value={"inactive"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.status === "inactive"}
                    id="inactive"
                  />
                  <label
                    htmlFor="inactive"
                    className="switch-label switch-label-on"
                  >
                    Inactive
                  </label>
                  <span className="switch-selection" />
                </div> */}
              </div>

              <p className="errorMsg">
                <ErrorMessage name="status" />
              </p>
            </div>

            <div className="inputDate">
              <label htmlFor="date">
                Select date <span className="required" />
              </label>
              <input
                type="date"
                id="date"
                name="dob"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
              />

              <p className="errorMsg">
                <ErrorMessage name="dob" />
              </p>
            </div>

            <div className="selectWrapper">
              <select
                className="form-select date_select"
                aria-label="Default select example"
                id="country-simple-select"
                name="country"
                onChange={(e) => {
                  handleCountryChange(e);
                  handleChange(e);
                }}
                value={values.country}
              >
                <option value={""} selected>
                  -- Select country --
                </option>
                {countries.map((country, index) => {
                  return (
                    <option key={country?.name} value={country?.isoCode}>
                      {country?.name}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="country-simple-select">
                <span className="required" />
              </label>

              <p className="errorMsg">
                <ErrorMessage name="country" />
              </p>

              <select
                class="form-select"
                aria-label="Default select example"
                name="city"
                onChange={handleChange}
                value={values.city}
              >
                <option value={""} selected>
                  -- Select city --
                </option>
                {cities?.map((city, index) => {
                  return (
                    <option key={index} value={city?.name}>
                      {city?.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <p className="errorMsg">
              <ErrorMessage name="city" />
            </p>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="check"
                id="flexCheckDefault"
                // value={values.check}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.check}
                defaultValue={values.check}
              
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agree to terms and conditions <span className="required" />
              </label>
            </div>

            <p className="errorMsg">
              <ErrorMessage name="check" />
            </p>

            <p style={{ color: "red", textAlign: "center" }}>
              Note: "
              <i
                style={{ fontSize: "8px" }}
                className="fa-solid fa-star-of-life"
              />
              " sign are required fields
            </p>

            <div className="modal-footer mt-2">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setUpdateId(null);
                  setShowEditModal(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => resetForm()}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={showEditModal ? null : !isValid || !dirty}
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={() => setShowEditModal(false)}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddForm;
