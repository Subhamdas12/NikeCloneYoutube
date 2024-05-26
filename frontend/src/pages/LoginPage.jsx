import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingPage/Footer";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/favicon.ico";
import {
  loginUserAsync,
  selectLogginError,
  selectLogginUser,
} from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLogginUser);
  const logginError = useSelector(selectLogginError);
  return (
    <>
      {user && <Navigate to="/"></Navigate>}
      <Navbar></Navbar>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-16" src={logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-xl leading-1 tracking-tighter font-bolder text-gray-900 uppercase font-Oswald">
            Your Account for <br /> everything nike
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit((data) => {
              dispatch(loginUserAsync(data));
            })}
          >
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email is not valid",
                    },
                  })}
                  autoComplete="email"
                  placeholder="Email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password required",
                  })}
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {logginError && <p className="text-red-500">{logginError}</p>}

              <div className="w-full text-right">
                <div className="text-sm">
                  <Link
                    to="/forgotPassword"
                    className="font-semibold opacity-50"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xs tracking-wider text-center opacity-75">
              By logging in, you agree to Nike's{" "}
              <span className="underline">Privacy Policy</span> and
              <span className="underline"> Terms of Use</span> .
            </p>
            <div>
              <button
                type="submit"
                className="flex uppercase font-Oswald tracking-tighter w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="font-semibold leading-6 text-blackunderline underline"
            >
              Join us
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LoginPage;
