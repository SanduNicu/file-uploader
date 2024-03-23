import { useCallback, useEffect, useState } from "react";
import List from "../List/List";
import FileUploader from "../fileUploader";
import { SubmitResult } from "../fileUploader/types";

const fetchOptions = {
  url: "http://localhost:5173/api/upload",
};

export default function FileDashboard() {
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit = useCallback(
    ({ savedFiles }: SubmitResult) => {
      setFiles([...files, ...savedFiles]);
    },
    [files]
  );

  useEffect(() => {
    fetch("http://localhost:5173/api/files")
      .then((res) => res.json())
      .then(({ files }) => setFiles(files))
      .catch(() => {
        console.error("Feching files failed!");
      });
  }, []);

  return (
    <div>
      <List files={files} />
      <FileUploader fetchOptions={fetchOptions} onSubmit={onSubmit} />
    </div>
  );
}
