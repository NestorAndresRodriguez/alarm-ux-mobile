Instalación de la app


1. Instalar nvm para poder instalar distintas versiones de node e instalar la versi+on de node 20.9.0 ó instalar la versión de node 20.9.0 o superiror a la 18.0.0
2. Instalación:
    * Con nvm
        - Eliminar las versiones de angular que esten instaladas.
        - Ejecutar el comando en una consola bash curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
        - Probar la instalación de nvm con el comando nvm -v
        - Instalar la versión requerida y estable con el comando nvm install 20.9.0
        - Revisar que la versión de node quede seleccionada con nvm use v20.9.0
        - Revise que la versión instalada de node es la v20.9.0
    * Sin nvm
        - Desinstale todas las versiones de node
        - Instale la versión 20.9.0 con el instalador de sus sistema operativo
        - Revise que la versión instalada de node es la v20.9.0
3. Instalar el CLI de ionic
    - Comando para instalar el ionic CLI: npm install -g @ionic/cli
    - Ejecute el comando npm i para instalar las dependencias del proyecto
4. Correr el proyecto
    - Ejecutar el comando ionoc serve