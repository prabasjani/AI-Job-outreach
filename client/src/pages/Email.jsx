import Layout from "../layout/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../api/client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

export default function Email() {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { capitalizeWords } = useAuth();

  const generate = async () => {
    try {
      setLoading(true);
      const res = await API.post("/email/generate", { jobRole, company });
      setEmail(res.data.email);
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error.response?.data?.msg);
    } finally {
      setLoading(false); // reset
    }
  };

  return (
    <Layout>
      <div className="flex items-center gap-x-5 pb-6 border-b border-accent/50">
        <Input
          placeholder="Role"
          onChange={(e) => setJobRole(capitalizeWords(e.target.value))}
        />
        <Input
          placeholder="Company"
          onChange={(e) => setCompany(capitalizeWords(e.target.value))}
        />
        <Button onClick={generate} disabled={loading}>
          {loading ? "Generating..." : "Generate Email"}
        </Button>
      </div>
      <div className="mt-6">
        {email && <h3>AI Generated Email Template</h3>}
        <div className="p-6 border border-accent/50 rounded-2xl whitespace-pre-wrap font-ubuntu">
          {email ? email : "Please Generate Email..."}
        </div>
      </div>
    </Layout>
  );
}
