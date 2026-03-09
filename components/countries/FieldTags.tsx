interface FieldTagsProps {
  fields: string[];
}

export default function FieldTags({ fields }: FieldTagsProps) {
  if (fields.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2.5">
      {fields.map((field) => (
        <span
          key={field}
          className="inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-colors"
          style={{
            color: "#1A5F5C",
            backgroundColor: "rgba(75, 191, 184, 0.12)",
            border: "1px solid rgba(75, 191, 184, 0.2)",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
          }}
        >
          {field}
        </span>
      ))}
    </div>
  );
}
