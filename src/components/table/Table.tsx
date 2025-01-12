"use client";
interface Props {
  columns: string[];
  children: React.ReactNode;
}

const Table = ({ columns, children }: Props) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="text-left pb-3 border-b border-dark2 font-medium text-sm text-gray"
              key={column}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
