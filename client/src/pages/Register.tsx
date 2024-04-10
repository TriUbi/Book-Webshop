import { useState } from "react";
import axios from "axios";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css'; 

export const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/register", registerInfo);

      setRegistrationSuccess(true);
      setRegisterInfo({ email: "", username: "", password: "" });

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
    <div className="text">
      <h2>Welcome to the best online book-club!</h2>
    </div>
      <div className="register-container">
        <input
          placeholder="email"
          value={registerInfo.email}
          type="text"
          onChange={(e) =>
            setRegisterInfo({
              ...registerInfo,
              email: e.target.value,
            })
          }
        />
        <input
          placeholder="username"
          value={registerInfo.username}
          type="text"
          onChange={(e) =>
            setRegisterInfo({
              ...registerInfo,
              username: e.target.value,
            })
          }
        />
        <input
          placeholder="password"
          value={registerInfo.password}
          type="password"
          onChange={(e) =>
            setRegisterInfo({
              ...registerInfo,
              password: e.target.value,
            })
          }
        />
        <button onClick={handleRegistration}>Register</button>
        {registrationSuccess && (
          <p className="succes-text">Registration successful! You can now log in <FontAwesomeIcon icon={faThumbsUp} /></p>
        )}
      </div>
    </>
  );
};
