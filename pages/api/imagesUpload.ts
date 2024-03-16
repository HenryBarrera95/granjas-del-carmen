import { NextApiRequest, NextApiResponse } from "next";
import B2 from "backblaze-b2";
import multer from "multer";

interface NextApiRequestWithFile extends NextApiRequest {
  file?: File | undefined;
}

interface File {
  originalname: string;
  buffer: Buffer;
}

const b2 = new B2({
  applicationKey: process.env.APPLICATION_KEY || "",
  applicationKeyId: process.env.KEY_ID || "",
  retry: { retries: 3 },
});

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequestWithFile,
  res: NextApiResponse
) {
  // el metodo Get es el metodo para obtener la url del archivo subido
  if (req.method === "GET") {
    console.log("GET", req.query.name)
    const { name } = req.query;
    const bucketName = process.env.BUCKET_NAME || "";
    try {
      await b2.authorize();
      let bucketResponse = await b2.getBucket({ bucketName });
      let bucketId = bucketResponse.data.buckets[0].bucketId;

      if (typeof name !== "string")
        return res.status(400).json({ error: "File Name is required" });

      let listFilesResponse = await b2.listFileNames({
        bucketId: bucketId,
        startFileName: name,
        maxFileCount: 1,
        delimiter: "",
        prefix: ""
      });

      if (listFilesResponse.data.files.length === 0) {
        return res.status(404).json({ error: "File not found" });
      }

      const fileData = listFilesResponse.data.files[0];

      let response = await b2.getFileInfo({
        fileId: fileData.fileId,
      });

      res.json(response.data);
    } catch (err) {
      console.log("Error getting file: ", err);
      res.status(500).json({ error: "Error getting file" });
    }
  }

  if (req.method === "POST") {
    const multerAny: any = multer();
    multerAny.single("file")(req, res, async function (err: any) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const file = req.file;
      const bucketName = process.env.BUCKET_NAME || "";
      const fileName = file?.originalname ?? "";
      const fileData = file?.buffer ?? "";
      try {
        await b2.authorize();
        // Get bucket first
        let bucketResponse = await b2.getBucket({ bucketName });
        let bucketId = bucketResponse.data.buckets[0].bucketId;
        // Then get upload URL using bucketId
        let response = await b2.getUploadUrl({ bucketId });
        const { uploadUrl, authorizationToken } = response.data;
        await b2.uploadFile({
          uploadUrl,
          uploadAuthToken: authorizationToken,
          fileName,
          data: fileData ? Buffer.from(fileData) : Buffer.from(""),
        });
        res.json({ success: true });
      } catch (err) {
        console.log("Error uploading file: ", err);
        res.status(500).json({ error: "Error uploading file" });
      }
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
