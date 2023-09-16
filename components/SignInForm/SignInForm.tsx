"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import Image from "next/image";
import TestImage from './img_test.png';

export const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    console.log('handleSubmit', event);
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      nickname: formData.get("nickname"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="login-form">
    //   <input type="text" name="nickname" required />
    //   <input type="password" name="password" required />
    //   <button type="submit">Sign In</button>
    // </form>
    <div className='flex items-center justify-center h-[calc(100vh-32px)] bg-gray-300'>
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="max-w-md p-6 md:p-10">
          <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p 
            className="max-w-sm mb-12 font-sans font-light text-gray-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia possimus repudiandae.
          </p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="nickname"
              placeholder="Enter your nickname"
              className="w-full p-3 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              required
            />
            <input 
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              required
            />
            <div 
              className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0"
            >
              <div className="font-thin text-gray-700 hover:text-gray-900 cursor-pointer">
                Registration
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto flex justify-center items-center p-3 px-6 space-x-4 font-sans font-bold text-white rounded-md 
                bg-gray-700 shadow-gray-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5"
              >
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="24" width="24"><g id="next--next-arrow-right-keyboard"><path id="Vector" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M0.4642857142857143 6.5h9.285714285714286" strokeWidth="1"></path><path id="Vector_2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M6.5 9.75 9.75 6.5 6.5 3.25" strokeWidth="1"></path><path id="Vector_3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M12.535714285714286 3.25v6.5" strokeWidth="1"></path></g></svg>
              </button>
            </div>
          </form>
        </div>
        <Image
          className="object-cover w-[360px] hidden md:block rounded-r-2xl"
          src={TestImage}
          width={496}
          height={496}
          alt="Test img"
        />
      </div>
    </div>
  );
};