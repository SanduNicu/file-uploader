import { MAX_CHUNK_SIZE, SIZE_ERROR } from "./constants";
import { UploadFilesArgs } from "./types";

export function uploadFiles({
  files,
  fetchOptions,
  setIsLoading,
}: UploadFilesArgs) {
  const { url = "", ...remainingOptions } = fetchOptions;

  const formData = new FormData();
  [...files].forEach((file) => {
    formData.append("file", file);
  });

  setIsLoading(true);
  fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      // "content-type": "multipart/form-data",
      // "content-length": "",
    },
    ...remainingOptions,
  })
    // .then((res) => res.json())
    // .then(() => onSuccess(files))
    // .catch(() => onFail(files))
    .finally(() => setIsLoading(false));
}

export function validateFiles(files: File[]) {
  const validSize = files.every((file) => file.size < MAX_CHUNK_SIZE);
  if (!validSize) {
    return { error: SIZE_ERROR };
  }

  return { error: "" };
}
