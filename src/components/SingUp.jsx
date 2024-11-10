import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../public/firebase-init";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    if (!terms) {
      setError("Please accept the terms and conditions to proceed.");
      return;
    }

    console.log(email, password, terms);
    setLoading(true);
    setError("");

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoading(false);
        // Redirect or show success message here
        alert("Account created successfully!");
      })
      .catch((error) => {
        setLoading(false);
        console.error("An error occurred while registering:", error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center my-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer flex flex-row-reverse">
                <span className="label-text">Accept Terms & Conditions</span>
                <input type="checkbox" className="checkbox" name="terms" />
              </label>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
