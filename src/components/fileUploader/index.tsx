import { memo, useCallback, useRef, useState } from "react";
import { uploadFiles, validateFiles } from "./utils";
import { FetchOptions } from "./types";
import styles from "./styles.module.scss";

interface FileUploaderProps {
  fetchOptions?: FetchOptions;
}

function FileUploader(props: FileUploaderProps) {
  const { fetchOptions = {} } = props;
  const hiddenInput = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const showFileInfo = !!files.length;

  const onClick = useCallback(() => {
    if (hiddenInput.current) hiddenInput.current.click();
  }, []);

  const handleFileSubmit = useCallback(async () => {
    if (!files.length) {
      return;
    }

    setIsLoading(true);
    await uploadFiles({
      files,
      fetchOptions,
    });
    setIsLoading(false);
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
    <div className={styles.wrapper}>
      <input
        ref={hiddenInput}
        className={styles.uploader}
        type="file"
        name="file-uploader"
        multiple
        onChange={handleFileChange}
      />
      <button disabled={isLoading} onClick={onClick}>
        Upload files
      </button>
      {showFileInfo && <span>{files.length} file(s) selected.</span>}
      <button
        onClick={handleFileSubmit}
        disabled={isLoading}
        className={styles.submitButton}
      >
        Submit files
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
export default memo(FileUploader);
