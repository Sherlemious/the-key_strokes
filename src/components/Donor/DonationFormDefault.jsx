import React from "react";
import useUpdate from "../../hooks/useUpdate";

const DonationFormDefault = ({ selectedDonation, setSelectedDonations }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedDonation);
    setSelectedDonations((prevSelectedDonation) => {
      prevSelectedDonation.pending = true;
      prevSelectedDonation.completed =
        new Date() > new Date(event.target.pickupTime.value);

      useUpdate("donations/" + prevSelectedDonation?.id, prevSelectedDonation);
      return null;
    });
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
          min="1"
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
      <label className="block">
        Type Of Transportation Depending On Donation Size:
        <select
          name="pickupVehicle"
          required
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="car">Car</option>
          <option value="truck">Truck (for bigger donations)</option>
          <option value="motorcycle">Motorcycle (for small donations)</option>
        </select>
      </label>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded font-heading text-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DonationFormDefault;
