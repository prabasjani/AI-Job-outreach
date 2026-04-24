import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="h-screen w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col justify-between p-6">
      <div>
        <h1 className="text-xl text-gray-700 font-bold font-mont mb-8">
          EM<span className="text-primary!">AI</span>L
        </h1>

        <nav className="flex flex-col gap-6 text-accent text-sm font-semibold font-mont">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/email">Email</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </div>

      <div className="pb-16">
        <Button
          onClick={logout}
          classes="bg-red-400! hover:bg-red-500! text-white!"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
