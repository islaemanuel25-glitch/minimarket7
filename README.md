# ERP Azul — Ready to Deploy (Next.js + Supabase)

Este proyecto está preparado para subir a **GitHub** y **Vercel** directamente.
Tenés login por **Usuario** (username) + **Contraseña** (Supabase Auth) y un dashboard con sidebar azul.

## Pasos rápidos
1. Renombrá `.env.local.example` a `.env.local` y pegá tus claves de Supabase.
2. Subí la carpeta a GitHub (arrastrar y soltar) y luego importala en Vercel.
3. En Supabase, ejecutá el SQL de `supabase_init.sql` (ver abajo) y creá el usuario de ejemplo usando el comando `curl` incluido.
4. Abrí la URL en Vercel o `http://localhost:3000/login` si corrés local.

## SQL de ejemplo y usuario
El archivo `supabase_init.sql` contiene la definición de la tabla `profiles` y un ejemplo de inserción.
Debido a que los usuarios de Supabase Auth deben crearse mediante la API de Auth (o desde el panel),
incluimos también un comando `curl` para crear un usuario de ejemplo.

- Usuario de ejemplo: `emanuel`
- Email de ejemplo: `emanuel@example.com`
- Password de ejemplo: `123456`

> Importante: reemplazá la `SERVICE_ROLE_KEY` por la "service_role" de tu proyecto solo para ejecutar el `curl` o usar el panel. **No** subas la service_role a GitHub ni a Vercel en variables públicas.

