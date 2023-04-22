import { useRecordContext} from "react-admin";

const RecordTitle = () => {
  const record = useRecordContext();

  const title = record ? `"${record.title || record.name || record.login}"` : ''

  return <span>{ title }</span>;
};

export default RecordTitle;