import type { FeeRow } from "@/lib/country-data";

interface FeeTableProps {
  rows: FeeRow[];
  /** Optional: show "Program", "Duration", "Fee", "Notes" or custom headers */
  columns?: { program: string; duration: string; fee: string; notes: string };
}

const defaultColumns = {
  program: "Program",
  duration: "Duration",
  fee: "Tuition Fee",
  notes: "Notes",
};

function rowBg(highlight?: FeeRow["highlight"], isTotalRow?: boolean) {
  if (isTotalRow) return "#FFF3EE";
  switch (highlight) {
    case "orange":
      return "#FFF3EE";
    case "teal":
      return "#E8F8F7";
    case "gold":
      return "#FFF9E6";
    case "total":
      return "#FFF3EE";
    default:
      return "transparent";
  }
}

export default function FeeTable({ rows, columns = defaultColumns }: FeeTableProps) {
  const hideDuration = columns.duration === "";
  return (
    <div
      className="overflow-x-auto rounded-xl border"
      style={{
        borderColor: "rgba(75, 191, 184, 0.2)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      }}
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            style={{
              background: "linear-gradient(135deg, #2A2320 0%, #352d28 100%)",
              color: "#F2E8DC",
            }}
          >
            <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
              {columns.program}
            </th>
            {!hideDuration && (
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                {columns.duration}
              </th>
            )}
            <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
              {columns.fee}
            </th>
            <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
              {columns.notes}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const bg = rowBg(row.highlight, row.isTotalRow);
            const isTotal = row.isTotalRow ?? row.highlight === "total";
            const isFullyFunded = row.isFullyFunded;
            return (
              <tr
                key={i}
                style={{
                  backgroundColor: bg,
                  borderBottom:
                    i < rows.length - 1
                      ? "1px solid rgba(75, 191, 184, 0.1)"
                      : undefined,
                }}
                className="transition-colors"
              >
                <td className="px-5 py-3.5">
                  <span
                    className="text-[15px] font-semibold"
                    style={{
                      color: isFullyFunded
                        ? "#B8860B"
                        : isTotal
                          ? "#2A2320"
                          : "#2A2320",
                    }}
                  >
                    {row.program}
                  </span>
                </td>
                {!hideDuration && (
                  <td
                    className="px-5 py-3.5 text-[15px]"
                    style={{ color: "#4A4440" }}
                  >
                    {row.duration}
                  </td>
                )}
                <td className="px-5 py-3.5">
                  <span
                    className="text-[15px] font-bold"
                    style={{
                      color: isFullyFunded ? "#1B6B2F" : "#D4522A",
                    }}
                  >
                    {row.fee}
                  </span>
                  {row.feeSecondary && (
                    <span
                      className="block text-sm mt-0.5"
                      style={{ color: "#6B6560" }}
                    >
                      {row.feeSecondary}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-sm" style={{ color: "#6B6560" }}>
                  {row.notes ?? "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
