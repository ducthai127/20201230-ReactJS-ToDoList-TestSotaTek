import React from "react";

function Search() {
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <form className="custom-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search ..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
