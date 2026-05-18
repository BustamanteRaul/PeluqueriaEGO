const express = require("express");
const path = require("path");

const app = express();

/* =========================
   CONFIGURACIONES
========================= */

// EJS
app.set("view engine", "ejs");

// Carpeta views
app.set("views", path.join(__dirname, "views"));

/* =========================
   MIDDLEWARES
========================= */

// Formularios
app.use(express.urlencoded({ extended: true }));

// JSON
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

/* =========================
   IMPORTAR RUTAS
========================= */

const publicRoutes = require("./routes/publicRoutes");
const authRoutes = require("./routes/authRoute");
const adminRoutes = require("./routes/adminRoutes");

/* =========================
   USAR RUTAS
========================= */

// Publicas
app.use("/", publicRoutes);

// Auth
app.use("/auth", authRoutes);

// Admin
app.use("/admin", adminRoutes);

/* =========================
   SERVIDOR
========================= */

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});