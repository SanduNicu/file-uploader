export interface FetchOptions extends RequestInit {
  url?: string;
}

export interface UploadFilesArgs {
  files: File[];
  fetchOptions: FetchOptions;
}

export interface Chunk {
  files: File[];
  totalSize: number;
}

export interface SubmitResult {
  savedFiles: File[];
  failedFiles: File[];
}
