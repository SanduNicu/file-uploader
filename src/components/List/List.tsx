interface ListProps {
  files: File[];
}
export default function List(props: ListProps) {
  const { files } = props;

  if (!files.length) return <div>No current files</div>;

  return <div>List</div>;
}
