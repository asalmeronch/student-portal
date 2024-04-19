import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <LogoutLink />
        </nav>
      </header>
    </div>
  );
}
