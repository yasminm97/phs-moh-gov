import { useRouter } from "next/router";

export default function CardTable({ columns, rows }) {
  const router = useRouter();
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mb-6">
      <table className="min-w-full text-right">
        <thead className="bg-ministry-green text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
              onClick={() => router.push(`./letter-details`)}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {row[col.key] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
