import { Link } from "react-router-dom";

import { SignUpForm } from "../../components/authorization/signup/signup-form";

export function SignUpPage() {
  return (
    <div className="flex flex-column align-items-center p-5">
      <SignUpForm />
      <p>Already have account? <Link to={'/login'}>Log In!</Link></p>
    </div>
  );
}
