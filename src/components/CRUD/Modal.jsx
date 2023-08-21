import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";
import userSchema from "./userSchema";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../redux/actions/userActions";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import './radiostyle.css';


const Modal = ({
  cities,
  showEditModal,
  setShowEditModal,
  editUserData,
  updateId,
  setUpdateId,
  countries,
  setCountryVal,
  countryVal
}) => {
  // const { id, name, userName, email, city, dob, gender , country, password , co_password  } = editUserData;
  
  const dispatch = useDispatch();
  // console.log("🚀 ~ file: Modal.jsx:18 ~ countryVal:", countryVal)

  const handleCountryChange = (e)=>{
     setCountryVal(e.target.value)
    //  console.log(e.target.value);
  }


  // useEffect( ()=> {

  //   setTimeout(()=>{

  //     const countryValue = document.getElementById('country-simple-select');
      
      
  //     if(countryValue.value == country){

  //      return country = countryValue.innerText;
        
  //     }

  //     console.log("heloooooo",countryValue.value == country)
      
  //     return countryValue
      
  //     // console.log("🚀 ~ file: Modal.jsx:9 ~ Modal ~ editUserData:", editUserData);
  //   },1000);

  // },[])

  // console.log( "showEditmodal",showEditModal)


//  console.log("🚀 ~ file: Modal.jsx:52 ~ editUserData:", editUserData)

  
  

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog"  >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {showEditModal ? `Edit ${editUserData.name} ` : "Add User"}
              </h5>
              <button
                type="button"
                onClick={()=> { setUpdateId(null); setShowEditModal(false) }}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            {/*  User modal */}

            <div className="modal-body">
                  
               {
                showEditModal ?  <EditForm countries={countries} handleCountryChange={handleCountryChange} showEditModal={showEditModal} cities={cities} editUserData={editUserData} setShowEditModal={setShowEditModal} /> : <AddForm countries={countries} cities={cities} setShowEditModal={setShowEditModal} showEditModal={showEditModal} handleCountryChange={handleCountryChange} setUpdateId={setUpdateId} />
               }
 
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
