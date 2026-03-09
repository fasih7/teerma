import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #2A2320 0%, #1E1A17 50%, #2A2320 100%)",
      }}
    >
      <h1 className="text-6xl md:text-8xl font-bold mb-2" style={{ color: "#F2E8DC" }}>
        404
      </h1>
      <p className="text-xl mb-6 text-center" style={{ color: "#C9BDB5" }}>
        Page not found
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md font-semibold transition-colors"
        style={{
          backgroundColor: "#D4522A",
          color: "#FFFFFF",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
