import { useEffect, useState } from "react";
import { register } from "../../libs/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordError, setPasswordError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const min8CharsSpecialCharacterOneLetterOneNumber =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    if (!password?.match(min8CharsSpecialCharacterOneLetterOneNumber)) {
      setPasswordError(
        `The password must contain at least 8 characters, one special character, one letter and one number`
      );
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError(`Your passwords don't match`);

      return;
    }

    setPasswordError(null);
  }, [password, confirmPassword]);

  function registerUser(event) {
    event.preventDefault();

    if (passwordError) {
      return;
    }

    const user = {
      email,
      username,
      password,
    };

    register(user).then(() => navigate("/login"));
  }

  return (
    <form onSubmit={registerUser}>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="confirmPassword">Confirm password: </label>
        <input
          type="password"
          id="confirmPassword"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </fieldset>

      <p className="red">{passwordError}</p>

      <button>Register</button>
    </form>
  );
}
