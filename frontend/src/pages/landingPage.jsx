import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

// import "primereact/resources/themes/soho-light/theme.css";
import "primereact/resources/themes/soho-dark/theme.css";

export default function LandingPage() {
  return (
    <>
      <div>
        Links
        <Link to={`/new`}>create new quiz</Link>
      </div>
      <div>FOOTER</div>
    </>
  );
}
