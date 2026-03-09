import Navigation from "@/components/legacy/navigation";
import Footer from "@/components/legacy/footer";

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
