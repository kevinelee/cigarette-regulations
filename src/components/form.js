import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data", typeof data);
    setContent("");
  };

  const [content, setContent] = useState("");

  // const [date, setDate] = useState("");

  // console.log("kevins date", date, setDate);

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

  // function handleChange() {
  //   null;
  // }

  // function Options() {}

  console.log("kevins sellers", sellers);

  return (
    <>
      <form
        className="flex flex-col max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.firstName && (
          <p className="mb-3 text-red-500">This field is required</p>
        )}
        <input
          className=" border-2 border-black rounded p-2 my-2"
          type="date"
          placeholder="Date"
          name="date"
          ref={register({ required: true })}
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
          className=" border-2 border-black rounded p-2 my-2"
          type="text"
          placeholder="First 5 Letters of Company Name"
          name="firstName"
          maxLength={5}
          ref={register({ required: true, maxLength: 5 })}
        />
        <p className="mb-2">Choose a product:</p>


        <select className="border-2 border-black rounded p-2" name="Title" ref={register({ required: true })}>
          {products.map((product) => {
            return (
              <>
                <option value={product.product}>{product.product}</option>
              </>
            );
          })}
        </select>

        <input
          className="bg-green-600 hover:bg-green-500 cursor-pointer py-4 mt-2"
          type="submit"
        />
      </form>
      <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  {content}
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Last name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Phone
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="w-1/3 text-left py-3 px-4">Lian</td>
                <td className="w-1/3 text-left py-3 px-4">Smith</td>
                <td className="text-left py-3 px-4">
                  <a className="hover:text-blue-500" href="tel:622322662">
                    622322662
                  </a>
                </td>
                <td className="text-left py-3 px-4">
                  <a
                    className="hover:text-blue-500"
                    href="mailto:jonsmith@mail.com"
                  >
                    jonsmith@mail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
