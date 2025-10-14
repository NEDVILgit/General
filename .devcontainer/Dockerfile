# Usa una imagen oficial de Node.js.
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Instala herramientas globales de Node.js si es necesario (ej. nodemon)
# RUN npm install -g nodemon

# Instala dependencias del sistema operativo si es necesario
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-packages>

# [Opcional] Mejora la velocidad de npm en el contenedor
COPY --chown=node:node ["frontend/package.json", "frontend/package-lock.json", "/tmp/frontend/"]
COPY --chown=node:node ["backend/package.json", "backend/package-lock.json", "/tmp/backend/"]
RUN cd /tmp/frontend && npm ci
RUN cd /tmp/backend && npm ci
RUN ln -s /tmp/frontend/node_modules /workspace/frontend/node_modules
RUN ln -s /tmp/backend/node_modules /workspace/backend/node_modules
