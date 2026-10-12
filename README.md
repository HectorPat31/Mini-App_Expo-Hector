# Frase del Día 🌷

Aplicación móvil hecha con React Native y Expo. Muestra frases motivadoras, permite cambiar de frase, guardar favoritas y agregar frases propias.

## Funciones
- Pantalla principal con frases aleatorias.
- Pantalla de favoritas con `FlatList`.
- Formulario para agregar una frase y autor opcional.
- Componentes propios con props y manejo de estado con `useState`.
- Navegación con Expo Router.
- Diseño pastel usando `StyleSheet`.

## Requisitos
- Node.js LTS
- npm
- Expo Go para probar en el teléfono
- Cuenta de Expo para compilar el APK con EAS

## Cómo ejecutarla
```bash
npm install
npx expo start
```
Escanea el QR con Expo Go. El teléfono y la computadora deben estar conectados a la misma red, o utiliza las opciones de conexión que muestre Expo.

## Compilar el APK
Instala/inicia sesión en EAS CLI:
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```
El perfil `preview` de `eas.json` está configurado para generar un APK. Al terminar, abre el enlace que muestra EAS para descargarlo.

Antes de compilar, cambia `android.package` en `app.json` por un identificador propio, por ejemplo `com.tunombre.frasedeldia`, usando letras minúsculas y puntos.

## GitHub
Crea un repositorio público llamado `frase-del-dia`, luego ejecuta:
```bash
git init
git add .
git commit -m "Crear estructura inicial de Frase del Día"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/frase-del-dia.git
git push -u origin main
```
Haz al menos dos commits adicionales después de probar o mejorar la app, por ejemplo:
```bash
git add .
git commit -m "Agregar pantalla de frases favoritas"
git push
git add .
git commit -m "Agregar formulario y estilos pastel"
git push
```

## Capturas
Cuando la app esté funcionando, toma capturas reales de la pantalla principal y de favoritas y agrégalas aquí:
- `capturas/inicio.png`
- `capturas/favoritas.png`

## Enlaces de entrega
- Repositorio público: Pega aquí el enlace real de tu GitHub.
- APK de EAS Build: Pega aquí el enlace que EAS genere.

## Reflexión (completar después de probar)
En Expo Go pude probar la aplicación rápidamente sin instalar un APK. La versión compilada con EAS se instala como una aplicación independiente en Android. Lo más difícil fue __________ y lo resolví __________.
