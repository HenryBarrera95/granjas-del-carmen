import B2 from "backblaze-b2";

const uploadHandler = async (req, res) => {
  // reconstruct file buffer from stream
  const file = await new Promise((resolve) => {
    const chunks = [];

    req.on("readable", () => {
      let chunk;

      while (null !== (chunk = req.read())) {
        chunks.push(chunk);
      }
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
  });

  const b2 = new B2({
    applicationKeyId: process.env.BACKBLAZE_KEY_ID,
    applicationKey: process.env.BACKBLAZE_APP_KEY,
  });

  // b2 auth tokens are valid for 24 hours
  // .authorize returns the download url,
  // .getUploadUrl returns the upload url and auth token
  const { data: authData } = await b2.authorize();
  const { data: uploadData } = await b2.getUploadUrl({
    bucketId: process.env.BACKBLAZE_BUCKET_ID,
  });

  console.log(uploadData);

  // TODO figure out how to parse file name from form data
  const reqFileName = req.headers["x-filename"];
  console.log(reqFileName);

  const { data } = await b2.uploadFile({
    uploadUrl: uploadData.uploadUrl,
    uploadAuthToken: uploadData.authorizationToken,
    data: file,
    // there are no real directories in b2, if you want to place
    // your file in a folder structure, do so with slashes. ex:
    //   fileName: `/my-subfolder/uploads/${fileName}`
    fileName: reqFileName,
    // info: {}, // store optional info, like original file name
  });

  // construct friendly url to return in the response
  const bucketName = authData.allowed.bucketName;
  const downloadURL = authData.downloadUrl;

  res.status(200).json({
    // add timestamp to url to force re-fetching images with the same src
    url: `${downloadURL}/file/${bucketName}/${data.fileName}?timestamp=${data.uploadTimestamp}`,
  });
};

// tell next.js to disable body parsing and handle as a stream
export const config = {
  api: {
    bodyParser: false,
  },
};

export default uploadHandler;
