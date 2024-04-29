export const metadata = {
  title: "nextProject",
  description: "My first project in next JS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
