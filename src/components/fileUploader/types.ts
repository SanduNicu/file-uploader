export interface FetchOptions extends RequestInit {
  url?: string;
}

export interface UploadFilesArgs {
  files: File[];
  onSuccess: () => void;
  fetchOptions: FetchOptions;
  setIsLoading: (isLoading: boolean) => void;
}
