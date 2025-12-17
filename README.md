# SADOP Landing

## Instalación y Configuración

1.  **Instalar Node.js dependencias:**
    Asegúrate de estar en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar Servidor de Desarrollo:**
    Para ver la página en tu navegador:
    ```bash
    npm run dev
    ```

3.  **Construir para Producción:**
    ```bash
    npm run build
    ```

## Subir a GitHub

> **Nota:** Parece que Git no está instalado en este sistema. Por favor descargalo e instalalo desde [git-scm.com](https://git-scm.com/).

Una vez instalado Git, sigue estos pasos:

1.  **Inicializar el repositorio:**
    ```bash
    git init
    git add .
    git commit -m "Primer commit: Estructura inicial"
    ```

2.  **Crear un repositorio en GitHub:**
    - Ve a [GitHub.com](https://github.com/new).
    - Crea un nuevo repositorio (puedes llamarlo `sadop-landing`).
    - **No** inicialices con README, .gitignore o licencia (ya los tenemos).

3.  **Conectar y subir:**
    Copia los comandos que te da GitHub bajo "...or push an existing repository from the command line" y ejecútalos. Se verán algo así:
    ```bash
    git remote add origin https://github.com/TU_USUARIO/sadop-landing.git
    git branch -M main
    git push -u origin main
    ```
