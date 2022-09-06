import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="relative block md:flex md:justify-between bg-sectionBg px-[1rem] md:px-[4.188rem] pb-[5.938rem] md:pb-[4.75rem]">
      <form
        className="block w-full md:flex md:gap-[1.25rem] text-base text-white pt-8 md:pt-[4.75rem]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="md:w-[18%]">
          <input
            className="w-full placeholder-opacity-70 bg-transparent border-b border-b-white border-opacity-70 pb-2 outline-0"
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: "This filed is required",
            })}
          />
          {errors.name && (
            <span className="text-errorRed before:content-['⚠'] before:inline">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="md:w-[18%]">
          <input
            className="w-full placeholder-opacity-70 bg-transparent border-b border-b-white border-opacity-70 pb-2 mt-8 md:mt-0 outline-0"
            type="email"
            id="email"
            placeholder="Email Address"
            {...register("email", {
              required: "This filed is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-errorRed before:content-['⚠'] before:inline">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="md:w-[32%]">
          <input
            className="w-full placeholder-opacity-70 bg-transparent border-b border-b-white border-opacity-70 pb-2 mt-8 md:mt-0 outline-0 "
            type="text"
            id="message"
            placeholder="Message"
            {...register("message", {
              required: "This filed is required",
            })}
          />
          {errors.message && (
            <span className="text-errorRed before:content-['⚠'] before:inline">
              {errors.message.message}
            </span>
          )}
        </div>
        <input
          className="p-2 bg-[#00abdf] rounded cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      <div className="md:hidden absolute right-0 w-full max-w-[215px] h-full max-h-[70px] mt-[1.25rem]">
        <Image
          src="/images/form-bg.svg"
          className="object-cover"
          width={215}
          height={70}
          alt="background-arrow"
        />
      </div>
      <div className="hidden md:block md:max-w-[247px] xl:max-w-[368px] absolute right-0 md:mt-[3.25rem] xl:mt-[1.77rem]">
        <Image
          src="/images/form-bg.png"
          className="object-cover"
          width={368}
          height={90}
          alt="background-arrow"
        />
      </div>
    </div>
  );
}
