import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20 ml-5 md:max-w-3xl md:mx-auto md:flex">
      {/* left side */}
      <div className="flex-1 space-y-6">
        <Link to="/" className="text-xl font-bold sm:text-4xl dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
            Alex's
          </span>
          Blog
        </Link>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          rerum libero nulla sunt?
        </p>
      </div>
      {/* right side */}
      <div className="flex-1 space-y-2">
        <form className="flex flex-col space-y-6 mt-5">
          <div>
            <Label
              htmlFor="username"
              value="Your username"
              className="text-sm tracking-wide"
            />
            <TextInput placeholder="username" />
          </div>
          <div>
            <Label
              htmlFor="email"
              value="email"
              className="text-sm tracking-wide"
            />
            <TextInput placeholder="name@company.com" />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Your password"
              className="text-sm tracking-wide"
            />
            <TextInput placeholder="password" />
          </div>

          <Button
            color="gray"
            gradientDuoTone="purpleToBlue"
            className="text-xl"
          >
            Sign Up
          </Button>
        </form>
        <div>
          <Link to="/sign-in">
            Have account?
            <span className="ml-2 text-green-500 font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
