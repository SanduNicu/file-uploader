interface ListProps {
  files: File[];
}
export default function List(props: ListProps) {
  const { files } = props;

  if (!files.length) return <div>No current files</div>;

  return (
    <div className="p-3">
      <div className="text-xl font-bold">Files:</div>
      {files.map((file) => (
        <div key={file.name}>{file.name}</div>
      ))}
    </div>
  );
}
