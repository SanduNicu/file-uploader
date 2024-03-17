export interface FetchOptions extends RequestInit {
  url?: string;
}

export interface UploadFilesArgs {
  files: File[];
  fetchOptions: FetchOptions;
  setIsLoading: (isLoading: boolean) => void;
}
