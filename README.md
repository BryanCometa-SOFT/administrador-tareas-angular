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
✅ Editar tareas con título y descripción.
✅ Marcar tareas como completadas.
✅ Eliminar tareas de la lista.
✅ Diseño responsivo con CSS (Tailwind ).
✅ Código limpio y estructurado siguiendo buenas prácticas.

Justificación de las herramientas y enfoques utilizados

🔹 Creación de componentes reactivos desde cero
Decidí no utilizar librerías como Material UI u otras predefinidas, ya que mi objetivo principal era demostrar mis capacidades en la creación de componentes reactivos y reutilizables. Esta decisión me permitió construir desde cero interfaces dinámicas que responden de manera eficiente a las interacciones del usuario, sin depender de componentes prefabricados. Aunque el desarrollo fue un poco más lento, al final pude demostrar con mayor claridad mis habilidades como frontend developer, lo que considero un acierto, ya que pude personalizar cada detalle y hacer la aplicación más eficiente y adaptada a las necesidades del proyecto.

🔹 Firebase
Opté por Firebase debido a que ya integra servicios como Firestore, que funciona tanto como base de datos como API. Durante mi prueba, mi objetivo principal fue cubrir solo el frontend con Angular, y no quería simplemente almacenar los datos en un arreglo o array local, ya que esto no me permitiría demostrar completamente mis habilidades. Al usar Firestore, pude conectar mi aplicación a una API real, lo que proporcionó una mayor complejidad y una mejor solución a largo plazo. Además, Firebase me permitió automatizar el despliegue de la aplicación utilizando GitHub Actions. Cada vez que subía cambios a la rama master, el proceso de build y despliegue a Firebase Hosting se realizaba automáticamente, lo que mejoró la eficiencia y permitió un flujo de trabajo más ágil y profesional.

🔹Tailwind CSS
Decidí utilizar Tailwind CSS v4 ya que no había tenido la oportunidad de trabajar con esta versión anteriormente y consideré que sería una excelente oportunidad para aprender. Tailwind ofrece una mayor flexibilidad y personalización en comparación con frameworks como Bootstrap, que a menudo produce diseños muy similares entre sí. Con Tailwind CSS, puedo construir interfaces más únicas y detalladas, ajustando estilos de manera más precisa a las necesidades del proyecto.

🔹Estructura del proyecto
Dado que este proyecto es relativamente pequeño, opté por una estructura simple para mantener todo organizado, utilizando carpetas como páginas, componentes, interfaces, entre otras. Consideré que una estructura más modularizada habría sido innecesaria para el tamaño del proyecto. De todos modos, esta estructura me permitió un desarrollo ágil y una organización clara del código. Si el proyecto fuera a crecer en el futuro, podría implementar una arquitectura modular, pero para este caso, la estructura simple fue más que suficiente.