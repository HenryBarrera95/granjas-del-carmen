import axios from "axios";
import { useState } from "react";

export default function ImageUpload() {
  const [previewFile, setPreviewFile] = useState();

  const handleChange = (e) => {
    const files = e.target.files;
    const file = files[files.length - 1];

    if (file) {
      // construct data uri for previewing the image
      // before sending it to the server
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", () => {
        setPreviewFile({
          file,
          base64: fileReader.result,
        });
      });
    } else {
      setPreviewFile(null);
    }
  };

  const upload = async (animal) => {
    const { file } = previewFile;

    // rename the file before sending if you want
    const fileExt = file.name.substring(file.name.lastIndexOf(".") + 1);
    console.log(fileExt);
    const fileName = `${animal.type}-${animal.name}${
      new Date().toDateString
    }.${fileExt}`;

    try {
      // pass the instance of File, not the base64 string, to the server
      await axios.post(`/api/upload`, file, {
        headers: {
          "content-type": file.type,
          // TODO figure out how to parse file name from form data on the server
          "x-filename": fileName,
        },
      });

      // do something with the returned data, like store
      // the URL returned from the server
    } catch (err) {
      console.error(err);
    }

    setPreviewFile();
  };

  return (
    <div className="top-0 bg-secondary">
      <div className="text-white bg-primary mb-20 z-50">
        {previewFile && <img src={previewFile.base64} />}
      </div>
      <input
        type="file"
        id="my-image-id"
        name="my-image-id"
        onChange={handleChange}
        accept="image/png, image/jpeg, image/webp, image/jpg"
      />
      <button className="px-2 py-1 rounded-lg bg-primaryBg" onClick={upload}>
        Submit
      </button>
    </div>
  );
}
