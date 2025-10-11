"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* ===== LATERAL AZUL ===== */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>ERP Azul</h2>
        <nav style={styles.nav}>
          <Link href="/dashboard" style={styles.link}>Inicio</Link>
          <Link href="/dashboard/productos" style={styles.link}>Productos</Link>
          <Link href="/dashboard/stock" style={styles.link}>Stock</Link>
          <Link href="/dashboard/compras" style={styles.link}>Compras</Link>
          <Link href="/dashboard/ventas" style={styles.link}>Ventas</Link>
        </nav>
        <button style={styles.logout}>Cerrar sesión</button>
      </aside>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main style={styles.main}>
        {/* Encabezado con botón ⚙️ */}
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>

          <div style={styles.configWrapper}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={styles.configButton}
              title="Configuración"
            >
              ⚙️
            </button>

            {showMenu && (
              <div style={styles.menu}>
                <button
                  style={styles.menuItem}
                  onClick={() => router.push("/dashboard/roles")}
                >
                  Roles
                </button>
                <button
                  style={styles.menuItem}
                  onClick={() => router.push("/dashboard/usuarios")}
                >
                  Usuarios
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contenido dinámico */}
        <div style={styles.content}>{children}</div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
  },
  sidebar: {
    width: 220,
    background: "linear-gradient(180deg, #0a3a78 0%, #0f4c94 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 15px",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 15,
    padding: "8px 12px",
    borderRadius: 6,
    transition: "background 0.2s",
  },
  logout: {
    background: "#fff",
    color: "#0a3a78",
    border: "none",
    padding: "8px 10px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    padding: 25,
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#0a3a78",
    fontWeight: "bold",
    fontSize: 22,
  },
  configWrapper: {
    position: "relative",
  },
  configButton: {
    background: "transparent",
    border: "none",
    fontSize: 22,
    cursor: "pointer",
  },
  menu: {
    position: "absolute",
    top: 30,
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    padding: 8,
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    background: "transparent",
    border: "none",
    padding: "6px 12px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: 14,
  },
  content: {
    marginTop: 10,
  },
};
