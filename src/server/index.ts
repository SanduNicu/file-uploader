import express from "express";
import multer from "multer";
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(express.json());

app.get("/api/hello-world", (_, res) => res.json({ greeting: "Hello" }));

app.post("/api/upload", upload.array("file"), function (_req, res) {
  try {
    return res.status(200).json({ message: "File uploaded successfully!" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An error occurred";
    return res.status(500).json({ message });
  }
});

app.get("/api/files", async (_req, res) => {
  try {
    const fileNames = await readdir("uploads/");
    const files: { name: string; size: number }[] = [];
    for (const fileName of fileNames) {
      const file = await stat(join("uploads", fileName));
      files.push({
        name: fileName,
        size: file.size,
      });
    }

    return res.status(200).json({ files });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An error occurred";
    return res.status(500).json({ message });
  }
});
