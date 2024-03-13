import React, { useState } from "react";
import { uploadFile } from "../pages/api/storage-b2/images";

const UploadImage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      console.log("Uploading", selectedFile);
      try {
        const response = await uploadFile(selectedFile);
        console.log("File uploaded successfully:", response);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
