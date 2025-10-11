"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard({ email }) {
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{ margin: 0, fontSize: 22, color: "#0a3a78" }}>Dashboard</h1>
        <div style={styles.configContainer}>
          <span style={styles.email}>{email}</span>
          <div style={styles.configWrapper}>
            <button
              onClick={() => setShowConfigMenu((prev) => !prev)}
              style={styles.configButton}
            >
              ⚙️
            </button>
            {showConfigMenu && (
              <div style={styles.configMenu}>
                <button
                  style={styles.configItem}
                  onClick={() => router.push("/dashboard/roles")}
                >
                  Roles
                </button>
                <button
                  style={styles.configItem}
                  onClick={() => router.push("/dashboard/usuarios")}
                >
                  Usuarios
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tu contenido del dashboard actual */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Bienvenido ✅</h3>
          <p>
            Este es tu tablero principal. Desde acá vamos a sumar módulos
            (productos, stock, transferencias, proveedores) manteniendo el
            lateral azul y el contenido claro.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Siguiente paso</h3>
          <p>
            Conectemos la base de datos y empecemos con <b>Productos</b> (EAN,
            pack–unidad, precios).
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  configContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    position: "relative",
  },
  email: { fontSize: 13, color: "#475569" },
  configWrapper: { position: "relative" },
  configButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 20,
  },
  configMenu: {
    position: "absolute",
    top: 25,
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    padding: 8,
    display: "flex",
    flexDirection: "column",
  },
  configItem: {
    background: "transparent",
    border: "none",
    padding: "6px 12px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: 14,
  },
  cards: { display: "flex", gap: 20 },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    flex: 1,
  },
};

