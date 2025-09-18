"use client";

import Image from "next/image";
import React, { useState } from "react"; // Remove 'use' from imports

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex min-h-screen">
      {/* Background Image */}
      <div className="w-1/2">
        <Image
          src="/Rectangle 10.svg"
          alt="Rectangle"
          width={948}
          height={1000}
          className="object-cover h-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col pl-30 pt-20">
        {/* Title */}
        <div className="mb-8">
          <h1 className="font-semibold text-4xl text-[#10151F]">
            Registration
          </h1>
        </div>

        {/* Form Fields */}
        <div className="w-[554px] space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#3E424A] mb-2 rounded-[8px]"></label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              className="w-full px-3 py-3 border border-[#E1DFE1] rounded-lg focus:outline-none focus:ring-2"
              placeholder="Username "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#3E424A] mb-2"></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-3 py-3 border border-[#E1DFE1] rounded-lg focus:outline-none focus:ring-2"
              placeholder=" Email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#3E424A] mb-2"></label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="w-full px-3 py-3 border border-[#E1DFE1] rounded-lg focus:outline-none focus:ring-2"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#3E424A] mb-2"></label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full bg-[#FF4000]  text-white rounded-[10px] font-regular py-3 px-4 transition duration-200 mt-6">
            Register
          </button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <span className="text-[#3E424A]">Already member? </span>
            <a
              href="/login"
              className="text-[#FF4000] hover:underline font-medium"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration; // Export Registration, not Home
