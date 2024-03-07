import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.ConfirmPassword.value;
    form.reset();
    if (password.length < 6) {
      setError("password must be 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p className="text-center text-2xl  mt-5">Please Register</p>
      <form
        onSubmit={handleRegister}
        className="w-2/4 m-auto border-2 text-center mt-5"
      >
        <div className="Control-form">
          <p className="text-xl">Name : </p>
          <input
            className="border-2 rounded-xl w-3/4 py-1 bg-teal-100"
            type="text"
            name="displayName"
            placeholder="Your Name"
          />
        </div>
        <div className="Control-form">
          <p className="text-xl">Email : </p>
          <input
            className="border-2 rounded-xl w-3/4 py-1 bg-teal-100"
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="Control-form">
          <p className="text-xl">PassWord: </p>
          <input
            className="border-2 rounded-xl w-3/4 py-1 bg-teal-100"
            type="text"
            name="password"
            placeholder="Your password"
          />
        </div>
        <div className="Control-form">
          <p className="text-xl">Confirm Password: </p>
          <input
            className="border-2 rounded-xl w-3/4 py-1 bg-teal-100"
            type="text"
            name="ConfirmPassword"
            placeholder="please confirm Password"
          />
        </div>
        <div>
          <p className="text-red-700">{error}</p>
        </div>
        <div className="Control-form">
          <input
            className="text-white cursor-pointer font-bold my-2 border-2 rounded-xl w-1/4 py-2 bg-teal-800"
            type="submit"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
