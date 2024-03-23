import { MAX_CHUNK_SIZE, SIZE_ERROR } from "./constants";
import { Chunk, FetchOptions, UploadFilesArgs } from "./types";

export function getChunks(files: File[]) {
  const chunks = [{ files: [] as File[], totalSize: 0 }];

  for (const file of files) {
    const lastChunk = chunks.at(-1) || chunks[0];
    if (lastChunk?.totalSize + file.size < MAX_CHUNK_SIZE) {
      lastChunk?.files.push(file);
      lastChunk.totalSize += file.size;
    } else {
      const newChunk = { files: [file], totalSize: file.size };
      chunks.push(newChunk);
    }
  }

  return chunks;
}

export async function uploadFiles({ files, fetchOptions }: UploadFilesArgs) {
  const chunks = getChunks(files);

  for (const chunk of chunks) {
    await postChunk(chunk, fetchOptions);
  }
}

export function postChunk(chunk: Chunk, fetchOptions: FetchOptions) {
  const { url = "", ...remainingOptions } = fetchOptions;
  const formData = new FormData();

  chunk.files.forEach((file) => {
    console.log(file, file.name);
    formData.append("file", file, file.name);
  });

  return fetch(url, {
    method: "POST",
    body: formData,
    ...remainingOptions,
  });
}

export function validateFiles(files: File[]) {
  const validSize = files.every((file) => file.size < MAX_CHUNK_SIZE);
  if (!validSize) {
    return { error: SIZE_ERROR };
  }

  return { error: "" };
}
