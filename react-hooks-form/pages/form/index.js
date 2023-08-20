import React from "react";
import { useForm } from "react-hook-form";
function Form() {
  const onSubmit = (formData) => {};
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div>Form implementation</div>
      <form
        className="flex flex-col bg-gray-300 p-5 space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="First Name"
          className="border border-black space-y-2"
        />
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
          className="border border-black space-y-2"
        />
        <input
          {...register("favColour")}
          type="text"
          placeholder="Favourite Colour Name"
          className="border border-black space-y-2"
        />
        <button type="submit" className="p-2 bg-white">
          {" "}
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
