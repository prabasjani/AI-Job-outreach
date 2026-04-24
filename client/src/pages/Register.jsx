// pages/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../layout/Footer";
import { toast } from "sonner";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await register(form);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border border-accent/50 shadow-2xl p-6 rounded-xl w-115 gap-y-2">
        <div className="mb-8">
          <h1 className="text-xl text-gray-700 font-bold mb-2.5 font-mont! tracking-wider">
            EM<span className="text-primary">AI</span>L Job Outreach
          </h1>

          <p className="font-ubuntu">Register to create an Account</p>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Username"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button onClick={submit}>Register</Button>
        </div>

        <p className="font-ubuntu mt-4">
          Already have an Account?{" "}
          <Link to="/login" className="text-hover font-semibold">
            Login
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}
