import React from "react";
import SelectItem from "./SelectItem";

const Search = () => {
  // let arr = [0, 1, 2, 3, 4];
  return (
    <div className="search-container">
      <h2>USE QUICK SEARCH TO FIND YOUR CAR</h2>
      <form className="search-form">
        <div className="search-input">
          <input type="text" name="" id="" placeholder="Your query" />
          <button className="go-btn red-btn">Go</button>
        </div>
        <div className="select-container">
          <h2>OR USE FILTERS</h2>

          <div className="select-items">
            <SelectItem title="Make" />
            <SelectItem title="Model" />
            <SelectItem title="Transmission" />
            <SelectItem title="Body Color" />
            <SelectItem title="Make" />
            <SelectItem title="Model" />
            <SelectItem title="Transmission" />
            <SelectItem title="Body Color" />
            <SelectItem title="Make" />
            <SelectItem title="Model" />
            <SelectItem title="Transmission" />
            <SelectItem title="Body Color" />
          </div>
        </div>
        <button className="find-btn red-btn">Find</button>
      </form>
    </div>
  );
};
export default Search;
