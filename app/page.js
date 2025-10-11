// app/page.jsx
import { redirect } from "next/navigation";

export default function Home() {
  if (typeof window !== "undefined") {
    redirect("/login");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>ERP Azul</h1>
      <p>Redirigiendo al inicio de sesión...</p>
    </main>
  );
}
