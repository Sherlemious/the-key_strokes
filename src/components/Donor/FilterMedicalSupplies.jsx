import React from "react";
import { useState } from "react";

const FilterMedicalSupplies = ({ setFurtherFiltering }) => {
  const [subCategory, setSubCategory] = useState("");

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs
    const subCategoryValue = subCategory;

    setFurtherFiltering({
      subCategoryValue,
      type: "Medical Supplies",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form className="mt-4 space-y-2 max-w-56" onSubmit={handleSubmit}>
      <div className="filter-label">
        <h2 className="filter-title ">
          <strong>
            <u>Filtering Options:</u>
          </strong>
        </h2>
        <select
          className="filter-input"
          value={subCategory}
          onChange={handleSubCategoryChange}
        >
          <option value="">Select a Category</option>
          <option value="Medical Device">Medical Device</option>
          <option value="Medical Equipment">Medical Equipment</option>
          <option value="Medication">Medication</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => {
          setSubCategory("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterMedicalSupplies;