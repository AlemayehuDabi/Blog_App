import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userStart, userFailure, userSuccess } from "../Redux//user/userSlice";
import OAuth from "../component/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, currentUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userStart());

    try {
      if (!form.password || !form.email) {
        return dispatch(userFailure("please fill out all the filled"));
      }

      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.status === false) {
        return dispatch(userFailure(data.message));
      }

      if (data.status === true) {
        dispatch(userSuccess(data));
        setForm({
          email: "",
          password: "",
        });

        navigate("/");
      }
    } catch (error) {
      return dispatch(userFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20 mx-5 md:max-w-3xl md:mx-auto md:flex">
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
        <form className="flex flex-col space-y-6 mt-5" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="email"
              value="email"
              className="text-sm tracking-wide"
            />
            <TextInput
              placeholder="name@company.com"
              onChange={handleChange}
              type="email"
              id="email"
              value={form.email}
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Your password"
              className="text-sm tracking-wide"
            />
            <TextInput
              placeholder="password"
              onChange={handleChange}
              id="password"
              type="password"
              value={form.password}
            />
          </div>

          <Button
            color="gray"
            gradientDuoTone="purpleToBlue"
            className="text-2xl"
            type="submit"
          >
            {isLoading ? (
              <div className="flex space-x-4 justify-center items-center">
                <Spinner size="sm" className="dark:text-white" />
                <span className="text-lg">Loading</span>
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
          <OAuth />
          {error && (
            <Alert
              className="py-4 text-lg font-semibold tracking-wider"
              color="failure"
            >
              {error}
            </Alert>
          )}
          {currentUser && (
            <Alert
              className="py-4 text-lg font-semibold tracking-wider"
              color="success"
            >
              {currentUser.message}
            </Alert>
          )}
        </form>
        <div>
          <Link to="/sign-up">
            Don't have account
            <span className="ml-2 text-green-500  text-lg">sign-up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
