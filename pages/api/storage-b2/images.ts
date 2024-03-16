import express, { Express, Request, Response } from "express";
import B2 from "backblaze-b2";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const app: Express = express();

const b2 = new B2({
  applicationKey: process.env.APPLICATION_KEY || "",
  applicationKeyId: process.env.KEY_ID || "", // Fix for Problem 1
  retry: { retries: 3 },
});

app.get("/authorize", async (_req: Request, res: Response) => {
  // Fix for Problem 6
  try {
    await b2.authorize();
    res.json({ success: true });
  } catch (err) {
    console.log("Error authorizing: ", err);
    res.status(500).json({ error: "Error authorizing" });
  }
});

app.get("/bucket", async (_req: Request, res: Response) => {
  // Fix for Problem 7
  const bucketName = process.env.BUCKET_NAME;
  try {
    if (bucketName) {
      // Fix for Problem 2
      await b2.authorize();
      let response = await b2.getBucket({ bucketName });
      res.json(response.data);
    } else {
      throw new Error("Bucket name is not defined");
    }
  } catch (err) {
    console.log("Error getting bucket: ", err);
    res.status(500).json({ error: "Error getting bucket" });
  }
});

app.get("/upload", async (req: Request, res: Response) => {
  res.json({ success: true, message: "Upload endpoint GET" });
});

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const bucketName = process.env.BUCKET_NAME;
    const fileName = req.file?.originalname;
    const fileData = req.file?.buffer;
    try {
      await b2.authorize();
      const bucketName = process.env.BUCKET_NAME || "";
      const fileName = req.file?.originalname ?? "";
      let response = await b2.getUploadUrl({ bucketId: bucketName });
      const { uploadUrl, authorizationToken } = response.data;
      await b2.uploadFile({
        uploadUrl,
        uploadAuthToken: authorizationToken,
        fileName,
        data: fileData ?? Buffer.from(""),
      });
      res.json({ success: true });
    } catch (err) {
      console.log("Error uploading file: ", err);
      res.status(500).json({ error: "Error uploading file" });
    }
  }
);

app.get("/download/:fileName", async (req: Request, res: Response) => {
  const bucketName = process.env.BUCKET_NAME || "";
  const fileName = req.params.fileName;
  try {
    await b2.authorize();
    let response = await b2.getDownloadAuthorization({
      bucketId: bucketName,
      fileNamePrefix: fileName,
      validDurationInSeconds: 3600,
    });
    res.json(response.data);
  } catch (err) {
    console.log("Error downloading file: ", err);
    res.status(500).json({ error: "Error downloading file" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
