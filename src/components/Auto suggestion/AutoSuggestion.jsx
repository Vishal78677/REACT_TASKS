import React from "react";
import "./style.css";

const AutoSuggestion = ({
  handleAutoCompleteChange,
  users,
  handleAutoCoSubmit,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="mainCon">
      <div className="container-xl">
        <div className="inputContainer">
          <form
            className="inputWrapper"
            onSubmit={(e) => handleAutoCoSubmit(e, searchValue)}
          >
            <div className="inputBtnWrapper">
            <input
              type="text"
              onChange={handleAutoCompleteChange}
              value={searchValue}
              placeholder="search..."
              className="mainInput"
            />
            <button type="submit" disabled={!searchValue} data-bs-toggle="modal" data-bs-target="#autoSearch" className="btn btn-success">
              Search
            </button>

            </div>
            {
                searchValue.length > 0 && (

                    <div className="dropdownMenu">
                    {users?.filter((user)=>{
                         const searchTerm = searchValue.toLowerCase();
                         const userName =  user.userName.toLowerCase();
        
                         return searchTerm && userName.startsWith(searchTerm) && searchTerm !== userName ;
                    }).map((user) => {
                      return <span onClick={()=> setSearchValue(user?.userName)} className="dropSpan" key={user?.id}>{user?.userName}</span>;
                    })}
                  </div>
                )
            }

          </form>

        </div>
      </div>
    </div>
  );
};

export default AutoSuggestion;
