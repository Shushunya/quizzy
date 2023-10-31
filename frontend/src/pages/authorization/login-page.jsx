import { Link } from "react-router-dom";

import { LoginForm } from "../../components/authorization/login/login-form";

export function LoginPage() {
  return (
    <div className="flex flex-column align-items-center p-5">
      <LoginForm />
      <p>No account? <Link to={'/signup'}>Sign Up!</Link></p>
    </div>
  );
}
