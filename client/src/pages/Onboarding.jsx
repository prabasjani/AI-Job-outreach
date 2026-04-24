import { useRef, useState } from "react";
import API from "../api/client";
import Button from "../components/Button";
import { toast } from "sonner";
import Input from "../components/Input";

export default function Onboarding() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", file);

    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      await API.post("/user/onboarding", formData);
      toast.success("Onboarding completed");
      window.location.href = "/dashboard";
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-accent/50 rounded-2xl shadow-2xl w-full max-w-2xl p-10 text-center">
        <h2 className="text-3xl!">COMPLETE ONBOARD</h2>

        <p className="text-gray-500 mb-8">
          Upload files you want to share with your team members. <br />
          PDF, Images & Videos are allowed.
        </p>

        <div className="border-2 border-dashed rounded-xl p-10 transition border-accent bg-orange-50 mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-main rounded-full">
              <svg
                className="w-8 h-8 text-hover"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
            </div>
          </div>

          <p className="mb-2">Select your files</p>
          <p className="mb-4">OR</p>

          <button
            onClick={() => fileInputRef.current.click()}
            className="px-8 py-2 rounded-xl bg-hover text-sm cursor-pointer"
          >
            Browse Files
          </button>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <Button onClick={submit}>Upload Resume</Button>
      </div>
    </div>
  );
}
