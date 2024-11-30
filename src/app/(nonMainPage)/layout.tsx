export default function NonRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto p-4 sm:mt-10">{children}</main>
  );
}
