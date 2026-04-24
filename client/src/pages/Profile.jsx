import { toast } from "sonner";
import API from "../api/client";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";
import Layout from "../layout/Layout";

export default function Profile() {
  const { user, setUser, deleteAccount, capitalizeWords } = useAuth();

  const update = async () => {
    try {
      const res = await API.put("/user/me", user);
      toast.success(res.data?.msg);
    } catch (error) {
      toast.error(error.response?.data?.msg);
    }
  };

  return (
    <Layout>
      <div className="w-150">
        <h2>Update Your Profile</h2>
        <div className="space-y-4">
          <Input
            value={user?.name || ""}
            onChange={(e) =>
              setUser((prev) => ({
                ...(prev || {}),
                name: capitalizeWords(e.target.value),
              }))
            }
            placeholder="Please Enter Username"
          />
          <Input
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Please Enter Email Address"
          />
          <Input
            value={user?.skills || ""}
            onChange={(e) =>
              setUser({ ...user, skills: capitalizeWords(e.target.value) })
            }
            placeholder="Please Enter Skills"
          />
        </div>

        <div className="flex items-center gap-x-10 mt-6">
          <Button onClick={update}>Update</Button>

          <Button
            onClick={deleteAccount}
            classes="bg-red-400! hover:bg-red-500! text-white!"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </Layout>
  );
}
