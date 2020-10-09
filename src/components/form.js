import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [date, setDate] = useState("");

  // console.log(watch)
  console.log("kevins date", date, setDate);

  const products = [
    {
      productFirst5: "SALEM",
      manufacturer: "ITG",
      product: "SALEM MENTHOL GOLD KING BOX",
      upc: "090500100270",
    },
    {
      productFirst5: "SALEM",
      manufacturer: "ITG",
      product: "SALEM MENTHOL GOLD 100 BOX",
      upc: "090500100287",
    },
  ];

  const sellers = [
    {
      seller: "LA TOP DISTRIBUTOR",
      sellerFEIN: 954823625,
      street: "336 S. Anderson St.",
      city: "Los Angeles",
      state: "CA",
      zip: 90033,
      zip4: 3710,
      country: "US",
    },
  ];

  console.log("kevins sellers", sellers, products);

  return (
    <form className="flex flex-col max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <input
        className=" border-2 border-black rounded p-2 my-2"
        type="text"
        placeholder="First 5 Letters of Company Name"
        name="firstName"
        maxLength={5}
        ref={register({ required: true, maxLength: 5 })}
      />
      {errors.firstName && (
        <p className="mb-3 text-red-500">This field is required</p>
      )}
      <input
        className=" border-2 border-black rounded p-2 my-2"
        type="date"
        placeholder="Date"
        name="date"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.date && (
        <p className="mb-3 text-red-500">This field is required</p>
      )}
      <input
        className=" border-2 border-black rounded p-2 my-2"
        type="tel"
        placeholder="Phone Number"
        name="phone"
        ref={register({ required: true, minLength: 10, maxLength: 12 })}
      />
      {errors.phone && (
        <p className="mb-3 text-red-500">This field is required</p>
      )}
      <input
        className=" border-2 border-black rounded p-2 my-2"
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="mb-3 text-red-500">This field is required</p>
      )}

      <input
        className="bg-green-600 hover:bg-green-500 cursor-pointer py-4"
        type="submit"
      />
    </form>
  );
}
