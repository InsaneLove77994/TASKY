📝 Descripción de la Aplicación

**Tasky** es una aplicación de lista de tareas que permite a los usuarios:

### Funcionalidades Básicas
- ➕ Agregar nuevas tareas.
- ☑️ Marcar tareas como completadas.
- 🗑️ Eliminar tareas.
- 💾 Guardado local (LocalStorage).

### Funcionalidades Avanzadas
- 🗂 Crear, editar y eliminar categorías.
- 🔗 Asignar categorías a tareas.
- 🔍 Filtrar tareas por categoría.

### Extra: Firebase Remote Config
- 🔧 Feature Flag que permite activar/desactivar una funcionalidad desde Firebase.

---

## 📦 Tabla de versiones

| Versión | Descripción                                                                 |
|---------|-----------------------------------------------------------------------------|
| `v1`    | Versión inicial: estructura base y tareas simples con almacenamiento local. |
| `v2`    | CRUD completo de categorías integrado.                                       |
| `v3`    | Integración con Firebase + Remote Config (feature flag funcional).           |
| `v4`    | Configuración completa para compilación en Android e iOS (Cordova).         |

---

## 🚀 Cómo ejecutar la aplicación


Sigue los siguientes pasos para ejecutar la aplicación **Tasky** en tu máquina de desarrollo.

### 🛠 Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

- **Node.js** (versión recomendada: `v14.x` o superior)  
  Descárgalo desde [aquí](https://nodejs.org/).
  
- **Ionic CLI** (para interactuar con el framework Ionic)  
  Instálalo globalmente con el siguiente comando:
  ```bash
  npm install -g @ionic/cli

-Android Studio (para compilar y emular en Android)

-Xcode (para compilar y emular en iOS, solo en macOS)
Instálalo desde la App Store de macOS.

1. Clona el repositorio
Primero, clona el repositorio de Tasky en tu máquina:
git clone https://github.com/tu-usuario/tasky.git
cd tasky

2. Instalar dependencias
Instala las dependencias necesarias para el proyecto con npm:
npm install

3. Ejecutar en el navegador (modo desarrollo)
Para ver la aplicación en el navegador, usa el comando:
ionic serve

4. Compilar para Android
Si deseas compilar la aplicación para Android, sigue estos pasos:
Agrega la plataforma Android:
-ionic cordova platform add android
Compila la aplicación para Android:
ionic cordova build android
Ejecuta la aplicación en un emulador o dispositivo físico:
ionic cordova run android


5. Compilar para iOS (solo en macOS)
Si deseas compilar la aplicación para iOS (solo en macOS), sigue estos pasos:

Agrega la plataforma iOS:
-ionic cordova platform add ios
Compila la aplicación para iOS:
-ionic cordova build ios
Ejecuta la aplicación en un emulador o dispositivo físico:
-ionic cordova run ios

Con estos pasos, deberías poder ejecutar la aplicación Tasky tanto en dispositivos Android como iOS, así como en el navegador para pruebas rápidas.



🔧 Solución de problemas
Si encuentras algún problema durante la instalación o ejecución, revisa lo siguiente:

Dependencias no encontradas: asegúrate de haber ejecutado npm install antes de intentar ejecutar la app.

Errores de compilación en Android: asegúrate de tener Android Studio y un emulador configurado correctamente.

Errores en iOS: necesitas una máquina con macOS y Xcode instalado para compilar para iOS.

Para más información, consulta la documentación oficial de Ionic.



🧰 Tecnologías Utilizadas
Ionic Framework

Angular

Cordova

Firebase (Remote Config)

TypeScript / SCSS

LocalStorage


👨‍💻 Autor
Tu Nombre Aquí
📧 sebastian77994@gmail.com
🔗 https://github.com/InsaneLove77994

