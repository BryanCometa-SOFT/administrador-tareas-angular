📌 Gestor de Tareas en Angular

Este proyecto es una aplicación web para la gestión de tareas (CRUD), desarrollada con Angular. Permite visualizar, agregar, actualizar y eliminar tareas, aplicando buenas prácticas de desarrollo.

🌐 📌 Demo en vivo
🔗 https://gestor-tareas-angular-web.web.app

🚀 Tecnologías utilizadas

Angular CLI v19.2.2

Node.js v22.14.0

CSS/Tailwind 4.0.13

🔥 Configuración de Firebase y Despliegue Automatizado
Este proyecto utiliza Firebase tanto para la gestión de datos como para el hosting, con un flujo de despliegue automatizado a través de GitHub Actions.

📌 Ejecución local
El archivo environment.ts se ha dejado intencionalmente expuesto para que el proyecto pueda ejecutarse sin configuraciones adicionales.

Cada vez que se realiza un push a la rama master, se ejecuta un GitHub Action que:

Instala las dependencias
Compila el proyecto con Angular
Despliega automáticamente a Firebase Hosting

Para probarlo localmente, sigue los siguientes pasos:

📂 Instalación y configuración

🔹 0. Es importante usar las mismas versiones de Node.js y Angular CLI para evitar posibles inconvenientes

🔹 1. Clonar el repositorio

git clone https://github.com/BryanCometa-SOFT/administrador-tareas-angular.git

🔹 2. Instalar dependencias del proyecto

npm install

🔹 3. Ejecutar el servidor de desarrollo

npm run start 

La aplicación estará disponible en http://localhost:4200


✨ Funcionalidades

✅ Listar tareas con estado (pendiente/completado).
✅ Agregar nuevas tareas con título y descripción.
✅ Marcar tareas como completadas.
✅ Eliminar tareas de la lista.
✅ Diseño responsivo con CSS (Tailwind ).
✅ Código limpio y estructurado siguiendo buenas prácticas.