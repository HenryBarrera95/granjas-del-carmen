import B2 from "backblaze-b2";

const b2 = new B2({
  applicationKey: "005d3f9bd7df98f6f8ce52f8abe7d62fa34a0213a0",
  applicationKeyId: "ff59e6942a21",
  retry: { retries: 3 },
});

export async function authorize() {
  try {
    await b2.authorize();
  } catch (err) {
    console.log("Error authorizing: ", err);
  }
}

export async function getBucket() {
  const bucketName = process.env.BUCKET_NAME ?? "";
  try {
    await authorize();
    let response = await b2.getBucket({ bucketName });
    return response.data;
  } catch (err) {
    console.log("Error getting bucket: ", err);
  }
}

export async function uploadFile(file: File) {
  const bucketName = process.env.BUCKET_NAME ?? "";
  const fileName = file.name;
  const fileData = Buffer.from(await file.arrayBuffer());
  try {
    await authorize();
    let response = await b2.getUploadUrl({ bucketId: bucketName });
    const { uploadUrl, authorizationToken } = response.data;
    await b2.uploadFile({
      uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName,
      data: fileData,
    });
  } catch (err) {
    if ((err as Error).message === "Invalid authorizationToken") {
      await authorize();
    }
    console.log("Error uploading file: ", err);
  }
}

export async function downloadFile(fileName: string) {
  const bucketName = process.env.BUCKET_NAME ?? "";
  try {
    await authorize();
    let response = await b2.getDownloadAuthorization({
      bucketId: bucketName,
      fileNamePrefix: fileName,
      validDurationInSeconds: 3600,
    });
    return response.data;
  } catch (err) {
    console.log("Error downloading file: ", err);
  }
}

export default {
  authorize,
  getBucket,
  uploadFile,
  downloadFile,
};
