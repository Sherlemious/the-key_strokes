import React from "react";

const DonationForm = ({ selectedDonation, setSelectedDonation }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <h2 className="text-2xl font-bold">{selectedDonation.title}</h2>
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
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setSelectedDonation(null)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DonationForm;
