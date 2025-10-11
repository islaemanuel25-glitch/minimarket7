
// app/layout.jsx
export const metadata = {
  title: "ERP Azul",
  description: "Sistema de gestión ERP conectado a Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
