import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, capitalizeWords } = useAuth();

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl! text-gray-700! font-semibold mb-0!">
        Welcome,{" "}
        <span className="text-primary!">{capitalizeWords(user?.name)}</span>
      </h2>
    </div>
  );
}
