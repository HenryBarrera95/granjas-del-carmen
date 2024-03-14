import React, { useState } from "react";

type UploadFileProps = {
  onFileSelect: (file: File | null) => void;
};

const UploadFile = ({ onFileSelect }: UploadFileProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    onFileSelect(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else {
      formData.append("file", "");
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading file");
      }

      const data = await response.json();
      console.log("File uploaded:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return <input type="file" onChange={handleFileChange} />;
};

export default UploadFile;
