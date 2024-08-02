import { useId } from "react";

const LoginForm = () => {

  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select id={selectId}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LoginForm