import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import auth from "../../public/firebase-init";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    if (!terms) {
      setError("Please accept the terms and conditions to proceed.");
      return;
    }

    setLoading(true);
    setError("");

    // Log in user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoading(false);
        alert("Login successful!");
        // Redirect or show success message here
      })
      .catch((error) => {
        setLoading(false);
        console.error("An error occurred during login:", error);
        setError(error.message);
      });
  };

  const handleForget = () => {
    if (emailRef.current && emailRef.current.value) {
      console.log("Forgot password for:", emailRef.current.value);
      // Implement password reset logic here
      alert(`Password reset link sent to ${emailRef.current.value}`);
    } else {
      alert("Please enter your email to reset your password.");
    }
  };

  return (
    <div className="hero bg-base-200 mb-24 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                ref={emailRef}
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
              <label onClick={handleForget} className="label">
                <span className="label-text-alt link link-hover cursor-pointer">
                  Forgot password?
                </span>
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
                {loading ? "Logging In..." : "Login"}
              </button>

              <p className="p-4 text-black text-sm">
                New to our website?{" "}
                <Link to="/sign-up" className="text-primary font-semibold">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
