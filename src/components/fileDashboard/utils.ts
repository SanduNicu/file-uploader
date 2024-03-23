export function fetchFiles() {
  return fetch("http://localhost:5173/api/files").then((res) => res.json());
}
