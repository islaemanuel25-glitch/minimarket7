-- supabase_init.sql
-- Crea la tabla profiles y política pública de lectura
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  email text unique not null,
  created_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Allow read profiles for all"
  on public.profiles for select
  to public
  using (true);

-- Ejemplo: insertar fila en profiles
-- IMPORTANTE: reemplazá <AUTH_USER_UUID> por el UUID real del usuario creado en Auth.
insert into public.profiles (id, username, email)
values ('<AUTH_USER_UUID>', 'emanuel', 'emanuel@example.com');


-- Crear usuario en Supabase Auth (ejemplo usando Admin REST API)
-- Reemplazá SERVICE_ROLE_KEY por tu service_role key (NO compartirla públicamente).
-- Este comando crea el usuario con email 'emanuel@example.com' y contraseña '123456'.
-- Ejecutalo en tu terminal local (requiere curl) o usá el panel de Supabase -> Authentication -> Users -> Create user.

/*
curl -X POST "https://<PROJECT>.supabase.co/auth/v1/admin/users"   -H "apikey: SERVICE_ROLE_KEY"   -H "Content-Type: application/json"   -d '{
    "email": "emanuel@example.com",
    "email_confirm": true,
    "password": "123456"
  }'
*/

-- Después de ejecutar el curl, reemplazá <AUTH_USER_UUID> en el insert anterior con el id
-- que devuelve la API (o buscá el nuevo user en Authentication -> Users y copiá su id).
