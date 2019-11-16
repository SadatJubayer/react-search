import React from "react";
import "./style.css";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
