import React from "react";
import { donationsTest } from "/src/pages/Donor/data.js";

const DonationForm = ({ selectedDonation, onFormSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(donationsTest[selectedDonation.id - 1]);
    donationsTest[selectedDonation.id - 1].pending = true;
    donationsTest[selectedDonation.id - 1].completed =
      new Date() > new Date(event.target.pickupTime.value);
    console.log(donationsTest[selectedDonation.id - 1]);
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <h2 className="text-xl font-bold">{selectedDonation.title}</h2>
      <label className="block">
        Item:
        <input
          type="text"
          name="item"
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="block">
        Quantity:
        <input
          type="number"
          name="quantity"
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <label className="block">
        Pickup Time:
        <input
          type="datetime-local"
          name="pickupTime"
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DonationForm;