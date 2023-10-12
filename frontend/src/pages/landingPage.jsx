import "primeicons/primeicons.css";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <div className='flex flex-column  p-3'>
        {/* <div> */}
        Links
        <div className='flex flex-column align-items-start gap-1 p-1'>
          <Link to={`/new`}>Error page</Link>
          <Link to={`/quizzes`}>Quiz List</Link>
          <Link to={'/users'}>user management</Link>
        </div>
      </div>
    </>
  );
}
