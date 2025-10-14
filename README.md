# CustomBag Designer Web App

Bienvenido a CustomBag Designer, una aplicación web interactiva que permite a los clientes diseñar mochilas, bolsos y bolsos materos personalizados desde plantillas base.

Este repositorio contiene la arquitectura completa y el código de inicio para el `frontend` (React + Fabric.js) y el `backend` (Node.js + Express) de la aplicación.

## Arquitectura del Proyecto

El proyecto está organizado en un monorepo con dos paquetes principales:

-   **/frontend**: Una aplicación de React creada con Vite. Se encarga de toda la interfaz de usuario y la lógica del lado del cliente.
    -   **Tecnologías Clave**: React, Vite, Tailwind CSS, Fabric.js.
    -   **Estructura**:
        -   `src/components`: Contiene componentes reutilizables como `Designer` (lienzo interactivo) y `Toolbar` (controles de personalización).
        -   `src/pages`: Contiene las vistas principales de la aplicación, como `DesignerPage`.
-   **/backend**: Un servidor API construido con Node.js y Express. Gestiona la lógica de negocio, las interacciones con la base de datos y la API REST.
    -   **Tecnologías Clave**: Node.js, Express, Mongoose (para MongoDB).
    -   **Estructura**:
        -   `models`: Define los esquemas de la base de datos (`Template`, `Design`).
        -   `routes`: Define los endpoints de la API REST.
        -   `controllers`: Contiene la lógica de negocio que gestiona las solicitudes.

---

## Cómo Empezar

Puedes configurar el proyecto manualmente o usar Dev Containers para una configuración automática y consistente.

### Usando Dev Containers (Recomendado)

Esta es la forma más sencilla de empezar. El contenedor incluye Node.js, MongoDB y todas las extensiones de VS Code recomendadas.

**Prerrequisitos:**
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   La extensión [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) de VS Code.

**Pasos para lanzar:**
1.  Clona este repositorio.
2.  Abre la carpeta del repositorio en VS Code.
3.  VS Code detectará automáticamente la configuración del Dev Container y te mostrará una notificación preguntando si quieres "Reopen in Container". Haz clic en ese botón.
4.  La primera vez, Docker construirá la imagen, lo que puede tardar unos minutos. Las siguientes veces será mucho más rápido.
5.  Una vez que el contenedor esté en funcionamiento, puedes abrir una terminal en VS Code y empezar a trabajar. Las dependencias ya estarán instaladas gracias al comando `postCreateCommand`.

### Configuración Manual

Sigue estas instrucciones si prefieres configurar el entorno en tu máquina local.

**Prerrequisitos:**

-   [Node.js](https://nodejs.org/) (versión 14 o superior)
-   [MongoDB](https://www.mongodb.com/try/download/community) (puedes usar una instancia local o un servicio en la nube como MongoDB Atlas)

### 1. Configuración del Backend

Primero, configura y ejecuta el servidor del backend.

```bash
# 1. Navega a la carpeta del backend
cd backend

# 2. Instala las dependencias
npm install

# 3. Configura las variables de entorno
# Crea un archivo .env en la raíz de /backend y añade tu URI de MongoDB:
# MONGO_URI=mongodb://localhost:27017/custombag

# 4. Inicia el servidor
npm start
```

El servidor del backend debería estar corriendo en `http://localhost:5000`.

### 2. Configuración del Frontend

Ahora, configura y ejecuta la aplicación de React.

```bash
# 1. Navega a la carpeta del frontend (desde la raíz del proyecto)
cd frontend

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

La aplicación de frontend debería estar corriendo en `http://localhost:5173` (o el puerto que Vite asigne).

---

## Próximos Pasos y Escalabilidad

Esta es una base sólida, pero aquí hay algunas ideas sobre cómo expandir el proyecto:

1.  **Conexión Real Frontend-Backend**:
    -   Modifica el `DesignerPage` en el frontend para que haga una llamada `fetch` real al endpoint `/api/templates` del backend en lugar de usar `mockTemplate`.

2.  **Interacción Completa del Diseñador**:
    -   Usa `forwardRef` en el componente `Designer` para permitir que el componente `DesignerPage` llame directamente a la función `changeObjectColor`.
    -   Implementa todas las funciones del diseñador: aplicar patrones, añadir texto personalizado, subir imágenes, etc.

3.  **Base de Datos y Guardado de Diseños**:
    -   Crea las rutas y controladores en el backend para guardar (`POST /api/designs`) y recuperar (`GET /api/designs/:user`) los diseños de los usuarios.
    -   Añade un botón "Guardar" en el frontend que envíe el estado del diseño al backend.

4.  **Autenticación de Usuarios**:
    -   Implementa un sistema de registro e inicio de sesión (por ejemplo, con JWT, OAuth con Google/Facebook) para que los usuarios puedan guardar y gestionar sus diseños.

5.  **Modo Administrador**:
    -   Crea un área de administración protegida donde puedas subir nuevas plantillas de productos, definir sus zonas personalizables (SVG paths) y gestionar los pedidos.
