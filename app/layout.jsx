export const metadata = {
  title: 'ERP Azul - Login',
  description: 'ERP con login por usuario conectado a Supabase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto' }}>
        {children}
      </body>
    </html>
  )
}
