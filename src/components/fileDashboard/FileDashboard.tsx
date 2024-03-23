import { useEffect, useState } from "react";
import List from "../List/List";
import FileUploader from "../fileUploader";

const fetchOptions = {
  url: "http://localhost:5173/api/upload",
};

export default function FileDashboard() {
  const [savedFiles, setSavedFiles] = useState<File[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/api/files")
      .then((res) => res.json())
      .then(({ files }) => setSavedFiles(files))
      .catch(() => {
        console.error("Feching files failed!");
      });
  }, []);

  return (
    <div>
      <List files={savedFiles} />
      <FileUploader fetchOptions={fetchOptions} />
    </div>
  );
}
