import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/actions/userActions";

const User = ({
  id,
  name,
  user,
  userName,
  gender,
  dob,
  email,
  index,
  check,
  status,
  city,
  password,
  co_password,
  deleteUser,
  setShowEditModal,
  handleEditUser,
  deleteUserInfo,
  setDeleteUserInfo,
  country,
  userStatus,
  handleStatusChange,

  
}) => {

  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td style={{ textTransform: "capitalize" }}>{name}</td>
        <td>{userName?.toLowerCase()}</td>
        <td>{gender}</td>
        <td>{dayjs(dob).format("DD/MM/YYYY")}</td>
        <td>{country}</td>
        <td>
          {city ? (
            city
          ) : (
            <i style={{ color: "gray" }} className="fa-solid fa-minus" />
          )}
        </td>
        <td>{email}</td>
        <td>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              name="userStatus"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={(e)=> handleStatusChange(e,user)}
              value={status}
              defaultValue={status}
              checked={status}
            />
          </div>
        </td>
        <td className="d-flex" style={{ gap: "16px" }}>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() =>
              handleEditUser({
                id,
                name,
                userName,
                gender,
                dob,
                email,
                city,
                country,
                password,
                co_password,
                check,
                status,
              })
            }
            className="actionsBtn"
          >
            <i
              className="fa-solid fa-pen-to-square"
              style={{ color: "green" }}
            />
          </button>{" "}
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            className="actionsBtn"
            onClick={() => {
              setShowEditModal(false);
              setDeleteUserInfo({ name: name, id: id });
            }}
          >
            <i className="fa-solid fa-trash" style={{ color: "red" }} />
          </button>{" "}
        </td>
      </tr>

      {/* Delete user modal */}

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete {deleteUserInfo.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Are you sure you want to delete user {deleteUserInfo.name} ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => deleteUser(deleteUserInfo.id)}
                className="btn btn-primary"
              >
                Delete user
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
