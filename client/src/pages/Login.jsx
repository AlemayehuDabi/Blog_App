import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
    // console.log(e.target.value);
  };

  // console.log(form);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    e.preventDefault();
    try {
      if (!form.password || !form.email) {
        setError("Please fill out all the filled");
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
        setError(data.msg);
        setIsLoading(false);
      }

      if (data.status === true) {
        setSuccess(data.msg);
        setIsLoading(false);
        setForm({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setError(error);
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
                <Spinner size="sm" />
                <span className="text-lg">Loading</span>
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
          {error && (
            <Alert
              className="py-4 text-lg font-semibold tracking-wider"
              color="failure"
            >
              {error}
            </Alert>
          )}
          {success && (
            <Alert
              className="py-4 text-lg font-semibold tracking-wider"
              color="success"
            >
              {success}
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
