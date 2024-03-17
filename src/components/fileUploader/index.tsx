import { memo, useCallback, useState } from "react";
import { uploadFiles, validateFiles } from "./utils";
import { FetchOptions } from "./types";

interface FileUploaderProps {
  fetchOptions?: FetchOptions;
}

function FileUploader(props: FileUploaderProps) {
  const { fetchOptions = {} } = props;
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSubmit = useCallback(() => {
    if (!files.length) {
      return;
    }

    uploadFiles({
      files,
      fetchOptions,
      setIsLoading,
    });
  }, [files, fetchOptions]);

  const handleFileChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (!ev.target.files) {
        return;
      }
      const files = [...ev.target.files];

      const { error } = validateFiles(files);
      if (error) {
        return setError(error);
      }

      if (files) {
        setFiles([...files]);
      }
    },
    []
  );

  return (
    <div>
      <input
        type="file"
        name="file-uploader"
        multiple
        onChange={handleFileChange}
        disabled={isLoading}
      />
      <button onClick={handleFileSubmit} disabled={isLoading}>
        Submit
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
export default memo(FileUploader);
