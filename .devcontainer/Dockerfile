# Usa una imagen oficial de Node.js.
# La etiqueta "0-20" selecciona una versión estable de Node.js 20,
# que es compatible con la versión de Vite del proyecto.
FROM mcr.microsoft.com/devcontainers/javascript-node:0-20

# El comando 'postCreateCommand' en devcontainer.json se encargará de
# ejecutar 'npm install' después de que el contenedor se haya creado,
# por lo que no necesitamos hacerlo aquí. Este enfoque es más simple y robusto.

# Opcional: Si necesitaras instalar dependencias a nivel de sistema operativo,
# lo harías aquí. Por ejemplo:
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends git
