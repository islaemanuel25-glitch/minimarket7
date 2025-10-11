"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const { data: rows, error: queryError } = await supabase
      .from("profiles")
      .select("email")
      .ilike("username", username.trim())
      .limit(1)

    if (queryError) {
      setLoading(false)
      setError("Error de conexión. Probá nuevamente.")
      return
    }

    if (!rows || rows.length === 0) {
      setLoading(false)
      setError("Usuario no encontrado")
      return
    }

    const email = rows[0].email

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setLoading(false)
      setError("Usuario o contraseña incorrectos")
      return
    }

    router.push("/dashboard")
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Inicio de sesión</h1>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Usuario</label>
          <input
            type="text"
            placeholder="Tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #07224c 0%, #0a3a78 100%)",
    padding: 16,
  },
  card: {
    width: "100%" ,
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 16,
    color: "#0a3a78",
    textAlign: "center",
  },
  label: {
    display: "block",
    fontSize: 13,
    color: "#334155",
    marginBottom: 6,
    marginTop: 8,
    fontWeight: 600,
  },
  input: {
    width: "100%" ,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    outline: "none",
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    width: "100%" ,
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    backgroundColor: "#0d4da4",
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 8,
  },
  error: {
    color: "#dc2626",
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
}
