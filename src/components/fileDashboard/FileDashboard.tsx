import { useState } from "react";
import List from "../List/List";
import FileUploader from "../fileUploader";

const fetchOptions = {
  url: "http://localhost:5173/api/upload",
};

export default function FileDashboard() {
  const [savedFiles, setSavedFiles] = useState<File[]>([]);

  return (
    <div>
      <List files={savedFiles} />
      <FileUploader fetchOptions={fetchOptions} />
    </div>
  );
}
