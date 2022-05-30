import { useAsyncDebounce } from "react-table";
import { useState } from "react";

function GlobalFilter(props: any) {
  const preGlobalFilteredRows = props.preGlobalFilteredRows;
  const globalFilter = props.globalFilter;
  const setGlobalFilter = props.setGlobalFilter;
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
}

export default GlobalFilter;
