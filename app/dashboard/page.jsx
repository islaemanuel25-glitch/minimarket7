"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState(null)

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        router.replace("/login")
        return
      }
      setEmail(data.session.user.email || null)
      setLoading(false)
    }
    check()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.replace("/login")
  }

  if (loading) {
    return <div style={{ padding: 24 }}>Cargando...</div>
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.brand}>ERP Azul</div>
        <nav style={styles.menu}>
          <a style={styles.menuItem} href="#">Inicio</a>
          <a style={styles.menuItem} href="#">Productos</a>
          <a style={styles.menuItem} href="#">Stock</a>
          <a style={styles.menuItem} href="#">Compras</a>
          <a style={styles.menuItem} href="#">Ventas</a>
        </nav>
        <button onClick={handleSignOut} style={styles.logout}>Cerrar sesión</button>
      </aside>

      <main style={styles.main}>
        <div style={styles.header}>
          <h1 style={{ margin: 0, fontSize: 22, color: "#0a3a78" }}>Dashboard</h1>
          <div style={{ fontSize: 13, color: "#475569" }}>{email}</div>
        </div>

        <section style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Bienvenido ✅</h3>
            <p style={styles.cardText}>
              Este es tu tablero principal. Desde acá vamos a sumar módulos (productos, stock,
              transferencias, proveedores) manteniendo el lateral azul y el contenido claro.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Siguiente paso</h3>
            <p style={styles.cardText}>
              Conectemos la base de datos y empecemos con <strong>Productos</strong> (EAN, pack→unidad, precios).
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

const styles = {
  app: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    minHeight: "100vh",
    backgroundColor: "#f3f6fb",
  },
  sidebar: {
    backgroundColor: "#07224c",
    color: "#fff",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  brand: {
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 12,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 8,
    flex: 1,
  },
  menuItem: {
    padding: "10px 12px",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.08)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
  },
  logout: {
    marginTop: "auto",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.3)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  },
  main: {
    padding: 20,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    boxShadow: "0 8px 16px rgba(2,6,23,0.06)",
  },
  cardTitle: {
    margin: 0,
    marginBottom: 8,
    fontSize: 16,
    color: "#0f172a",
  },
  cardText: {
    margin: 0,
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.5,
  },
}
