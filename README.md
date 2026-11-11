# ToDo Gestión — Aplicación de gestión de tareas

## Descripción

ToDo Gestión es una aplicación web desarrollada con React que permite organizar actividades personales mediante la creación, actualización del estado y eliminación de tareas.

El proyecto fue desarrollado como ejercicio práctico para fortalecer conocimientos de React, JavaScript y CSS, aplicando componentes reutilizables, manejo de estados y diseño responsive.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- ESLint

## Funcionalidades

- Agregar nuevas tareas.
- Validar que las tareas no estén vacías ni contengan únicamente espacios.
- Marcar tareas como completadas.
- Desmarcar tareas para devolverlas al estado pendiente.
- Eliminar tareas.
- Mostrar la cantidad de tareas pendientes, completadas y totales.
- Mostrar un mensaje cuando no existen tareas.
- Adaptar la interfaz a dispositivos móviles.

## Estructura del proyecto

```text
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── pages/
│   └── TodoPage.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Instalación

**1. Instalar las dependencias**

```bash
npm install
```

**2. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**3. Abrir la aplicación**

Ingresar en el navegador a la dirección local que indique Vite en la terminal.

## Comandos adicionales

**Verificar la calidad del código:**

```bash
npm run lint
```

**Generar la versión de producción:**

```bash
npm run build
```

## Almacenamiento de tareas

La aplicación utiliza el estado local de React mediante `useState` para administrar las tareas.

Los datos se mantienen en memoria mientras la aplicación está abierta. Al actualizar la página, las tareas se reinician porque no se utiliza una base de datos ni almacenamiento persistente.

## Diseño responsive

La interfaz fue desarrollada utilizando CSS y media queries para adaptarse a diferentes tamaños de pantalla, incluyendo computadores y dispositivos móviles.

## Estado del proyecto

Las funcionalidades principales están implementadas y se han realizado pruebas funcionales, una compilación de producción y una verificación de código con ESLint.