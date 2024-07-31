import React, { useState } from "react";
import axios from "axios";

const Addbook = () => {
  const [error, seterror] = useState("");
  const [data, setdata] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    title: "",
  });
  const handlechange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4001/book/addbook";
      const { data: res } = await axios.post(url, data);
      window.location = "/";
      setdata({
        name: "",
        price: 0,
        category: "",
        image: "",
        title: "",
      })
    } catch (error) {
      if (error.response && error.response >= 400 && error.response <= 500) {
        seterror(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-950 flex justify-center items-center ">
      <form
        method="post"
        onSubmit={handlesubmit}
        className=" w-[30%] h-[60%] flex flex-col justify-center child:m-2 child:dark:p-4 rounded-lg child:p-5 child:dark:shadow-lg child:dark:rounded-md bg-gray-300 shadow-lg shadow-black"
      >
        <h1 className="flex justify-center text-4xl font-bold bg-blue-500 text-white">
          Add Book
        </h1>
        <input
          type="text"
          name="name"
          value={data.name}
          required
          onChange={handlechange}
          placeholder="name"
        ></input>
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handlechange}
          required
          placeholder="price"
        ></input>
        <input
          type="text"
          value={data.category}
          onChange={handlechange}
          required
          name="category"
          placeholder="category"
        ></input>
        <input
          type="text"
          value={data.image}
          onChange={handlechange}
          required
          name="image"
          placeholder="image url"
        ></input>
        <input
          type="text"
          value={data.title}
          onChange={handlechange}
          required
          name="title"
          placeholder="Author"
        ></input>
        <button onClick={handlesubmit} className=" bg-green-500 m-3">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Addbook;
