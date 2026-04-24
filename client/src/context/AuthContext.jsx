import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import API from "../api/client";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await API.get("/user/me");
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (data) => {
    try {
      const res = await API.post("/auth/login", data);

      // fetch latest user AFTER login
      const userRes = await API.get("/user/me");
      const loggedInUser = userRes.data.user;

      // update state
      setUser(loggedInUser);
      toast.success(res?.data?.msg || "Login successful");
      // correct redirect logic
      if (loggedInUser?.onboardingCompleted) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/onboarding";
      }
      fetchUser();
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Login failed");
    }
  };

  const register = async (data) => {
    try {
      const res = await API.post("/auth/register", data);
      window.location.href = "/login";
      toast.success(res?.data?.msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Register failed");
    }
  };

  const logout = async () => {
    await API.post("/auth/logout");
    setUser(null);
  };

  const deleteAccount = async () => {
    await API.delete("/user/me");
    setUser(null);
  };

  const capitalizeWords = (str = "") => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login,
        register,
        logout,
        deleteAccount,
        capitalizeWords,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
