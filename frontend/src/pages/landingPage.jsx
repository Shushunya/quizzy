import "primeicons/primeicons.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-column align-items-center p-3'>
        Links
        <div className='flex flex-column align-items-start gap-1 p-1'>
          <Link to={`/new`}>Error page</Link>
          <Link to={`/quizzes`}>Quiz List</Link>
        </div>
      </div>
    </>
  );
}
