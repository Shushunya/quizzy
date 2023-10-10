import "primeicons/primeicons.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div>
        Links
        <Link to={`/new`}>Error page</Link>
        <Link to={`/quizzes`}>Quiz List</Link>
        
      </div>
    </>
  );
}
