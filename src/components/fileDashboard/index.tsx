import { useCallback, useEffect, useState } from "react";
import FileUploader from "@components/fileUploader";
import List from "@components/List";
import { SubmitResult } from "../fileUploader/types";
import { fetchFiles } from "./utils";

const fetchOptions = {
  url: "http://localhost:5173/api/upload",
};

export default function FileDashboard() {
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit = useCallback(({ savedFiles }: SubmitResult) => {
    setFiles((files) => {
      const filesObject = [...files, ...savedFiles].reduce(
        (acc, val) => ({ ...acc, [val.name]: val }),
        {}
      );
      return Object.values(filesObject);
    });
  }, []);

  useEffect(() => {
    fetchFiles()
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
