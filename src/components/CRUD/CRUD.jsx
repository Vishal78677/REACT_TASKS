import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import {
  addUser,
  autoSearchData,
  clearAllUsers,
  deleteUser,
  editUser,
} from "../../redux/actions/userActions";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
import { City, Country } from "country-state-city";
import AutoSuggestion from "../Auto suggestion/AutoSuggestion";
import dayjs from "dayjs";

const CRUD = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  const [updateId, setUpdateId] = useState(null);
  const { users , singleUser } = useSelector((state) => state.users);
  const [deleteUserInfo, setDeleteUserInfo] = useState({
    name: null,
    id: null,
  });
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState([]);
  const [countryVal, setCountryVal] = useState("");
  const [userStatus, setUserStatus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleAutoCompleteChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAutoCoSubmit = (e, searchValue) => {
    e.preventDefault();

    console.log("submited", searchValue);

    setSearchValue("");

    dispatch(autoSearchData(searchValue));
  };

  const handleClearAllUsers = () => {
    dispatch(clearAllUsers());
  };

  const handleEditUser = (user) => {
    setShowEditModal(true);
    setUpdateId(user.id);
    setEditUserData(user);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleStatusChange = (e, user) => {
    console.log("runnnnnnnnnnnn");

    const { id } = user;

    const values = {
      ...user,
      status: e.target.checked,
    };
    // console.log("🚀 ~ file: CRUD.jsx:59 ~ handleStatusChange ~ values:", e.target.value)

    dispatch(editUser({ values, updateId: id }));
  };

  // console.log("🚀 ~ file: CRUD.jsx:16 ~ CRUD ~ updateId:", updateId);

  // console.log("🚀 ~ file: CRUD.jsx:21 ~ CRUD ~ countries:", countries)
  // console.log("🚀 ~ file: CRUD.jsx:22 ~ CRUD ~ countryState:", countryState)

  // console.log("🚀 ~ file: CRUD.jsx:28 ~ CRUD ~ countryVal:", countryVal)

  // console.log("🚀 ~ file: CRUD.jsx:15 ~ CRUD ~ showEditModal:", showEditModal);

  useEffect(() => {
    setTimeout(() => {
      setCities(City.getCitiesOfCountry(countryVal));

      console.log(
        "🚀 ~ file: CRUD.jsx:131 ~ useEffect ~ City:",
        City.getCitiesOfCountry(countryVal)
      );
    }, 1100);
  }, [countryVal, showEditModal]);



  useEffect(() => {
    setShowEditModal(false);
  }, []);

  return (
    <div className="mainCon">
      {/* Header part */}
      <div className="container-fluid headerContainer">
        <header className="header container-xl d-flex align-items-center justify-content-between">
          <h3 className="mainHeading">Users Management</h3>
          <div className="headerBtnWrapper">
            <button
              type="button"
              className="btn btn-primary addWithIcon"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => {
                setUpdateId(null);
                setShowEditModal(false);
              }}
            >
              <span>
                <i className="fa-solid fa-user-plus addIcon" />
              </span>
              <span>Add new user</span>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setUpdateId(null);
                setShowEditModal(false);
                handleClearAllUsers();
              }}
            >
              Clear all users
            </button>
          </div>
        </header>
      </div>

      <AutoSuggestion
        users={users}
        setSearchValue={setSearchValue}
        handleAutoCoSubmit={handleAutoCoSubmit}
        searchValue={searchValue}
        handleAutoCompleteChange={handleAutoCompleteChange}
      />

      {/* Table Data */}

      <div
        className="container-xl userContainer"
        style={{ paddingBottom: "15px" }}
      >
        <table className="table table-striped">
          <thead style={{ borderBottom: "1px solid black" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">User name</th>
              <th scope="col">Gender</th>
              <th scope="col">Dob</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users?.map((user, index) => {
                return (
                  <User
                    key={user?.id}
                    index={index}
                    user={user}
                    id={user?.id}
                    userName={user?.userName}
                    name={user?.firstName}
                    gender={user?.gender}
                    dob={user?.dob}
                    country={user?.country}
                    email={user?.email}
                    check={user?.check}
                    status={user?.status}
                    password={user?.password}
                    co_password={user?.co_password}
                    deleteUserInfo={deleteUserInfo}
                    setDeleteUserInfo={setDeleteUserInfo}
                    city={user?.city}
                    deleteUser={handleDeleteUser}
                    handleEditUser={handleEditUser}
                    setShowEditModal={setShowEditModal}
                    userStatus={userStatus}
                    handleStatusChange={handleStatusChange}
                  />
                );
              })
            ) : (
              <p className="noUsers">No Users...</p>
            )}
          </tbody>
        </table>

        {/* Add User Model */}
        <Modal
          cities={cities}
          setUpdateId={setUpdateId}
          countryVal={countryVal}
          setCountryVal={setCountryVal}
          countries={countries}
          updateId={updateId}
          setShowEditModal={setShowEditModal}
          editUserData={editUserData}
          showEditModal={showEditModal}
        />

        {/* user details */}

        <div
          className="modal fade"
          id="autoSearch"
          tabIndex={-1}
          aria-labelledby="autoSearchLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="autoSearchLabel">
                  User {singleUser?.firstName ? singleUser?.firstName : "unknown"} info
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex" style={{flexDirection: "column", gap: "10px"}}>
                 <span style={{fontWeight:"bold"}} >User Id : <span style={{fontWeight: "400"}}>{singleUser?.id ? singleUser?.id : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >First Name : <span style={{fontWeight: "400"}}>{singleUser?.firstName ? singleUser?.firstName : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >User Name : <span style={{fontWeight: "400"}}>{singleUser?.userName ? singleUser?.userName : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >Email : <span style={{fontWeight: "400"}}>{singleUser?.email ? singleUser?.email : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >Gender : <span style={{fontWeight: "400"}}>{singleUser?.gender ? singleUser?.gender : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >Status : <span style={{fontWeight: "400"}}> {singleUser?.status ? "Active" : "Inactive"}</span> </span>
                 <span style={{fontWeight:"bold"}} >Country : <span style={{fontWeight: "400"}}>{singleUser?.country ? singleUser?.country : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >City : <span style={{fontWeight: "400"}}>{singleUser?.city ? singleUser?.city : "unknown"}</span> </span>
                 <span style={{fontWeight:"bold"}} >Date of Birth : <span style={{fontWeight: "400"}}>{singleUser?.dob ? dayjs(singleUser?.dob).format("DD/MM/YYYY") : "unknown"}</span> </span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default CRUD;
