import React, { useRef, useState } from "react";

function Search({ changeFilterSearch }) {
  const [filterSearch, setFilterSearch] = useState("");
  const typingTimeOutRef = useRef(null);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setFilterSearch(value);

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      changeFilterSearch(filterSearch);
    }, 200);
  };

  return (
    <div className="search-wrap">
      <div className="search-inner">
        <form className="custom-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={handleOnChange}
              value={filterSearch}
              placeholder="Search ..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
