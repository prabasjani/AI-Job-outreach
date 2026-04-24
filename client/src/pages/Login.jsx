// pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../layout/Footer";

export default function Login() {
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border border-accent/50 shadow-2xl p-6 rounded-xl w-115 gap-y-2">
        <div className="mb-8">
          <h1 className="text-xl text-gray-700 font-bold mb-2.5 font-mont! tracking-wider">
            EM<span className="text-primary">AI</span>L Job Outreach
          </h1>

          <p className="font-ubuntu">Login to Access your Account</p>
        </div>
        <form className="space-y-4" onSubmit={submit}>
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button type="submit">Login</Button>
        </form>

        <p className="font-ubuntu mt-4">
          Create an Account?{" "}
          <Link to="/register" className="text-hover font-semibold">
            Register
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}
