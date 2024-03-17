import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FileUploader from "./components/fileUploader";

const fetchOptions = {
  url: "http://localhost:5173/api/upload",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileUploader fetchOptions={fetchOptions} />
  </React.StrictMode>
);
