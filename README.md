# PruebaIo2
Prueba de aplicación Android utilizando Ionic 2. Se comentarán los pasos a seguir para la generación de una apk que se pueda ejecutar en un ADV (Android Virtual Device) así como en un dispositivo Android.

# Instalar android studio
Instalar android estudio desde la página oficial.

# Crear un proyecto android
Al crear un proyecto android se instalarán muchas de las herramientas que posteriormente necesitaremos para nuestro proyecto. Así es por ejemplo SDK de Android, así como herramientas para generar AVD (Android Virtual Devices), emuladores.

# Crear una máquina virtual
Desde el visual studio "Tools > Android > AVD"

Crear una máquina virtual instalando para ello la api 26 (Actualmente a 22/11/2017, da error al ejecutar Ionic 2 en versiones superiores).

# Asegurar Variables de entorno
JAVA_HOME: Debe aputnar al jdk instalado (mínimo 1.8)
ANDROID_HOME: Directorio donde está apuntando el sdk de Android. Con android studio es posible que se haya instalado en "C:\Users\USERNAME\AppData\Local\Android\Sdk"

En el path apuntar a las carpetas "tools" y "platform-tools" que se encuentran dentro de la carpeta del sdk:
  %ANDROID_HOME%\tools
  %ANDROID_HOME%\platform-tools

# Instalar Ionic
Desde la página oficial de ionic te indican los pasos necesarios para instalarlo (recuerda tener node instalado).

# Crear proyecto ionic
Para ello se puede utilizar el comando:

ionic start APPLICATION_NAME

Para comprobar que se ha instalado correctamente entrar en ella cd APPLICATION_NAME y ejecutar "ionic serve". La aplicación se debe mostrar en el navegador

# Añadir plataforma android
Desde la aplicación ejecutar el comando:

  ionic cordova platform android
  
# Encender AVD
Desde Android Studio se puede encender el emulador creado anteriormente desde "Tools > Android > AVD".

# Ejecutar APP en Android
ionic cordova emulate android

Si todo ha ido bien la aplicación se debe ejecutar en el emulador.

Se ha generado también un apk para debug en 
  
APPLICATION_PATH\platforms\android\build\outputs\apk\android-debug.apk

Este apk puedes probarlo en el movil aunque no sea una versión de producción.

# Generar APK Producción
Se puede generar una apk de producción con el comando:

  ionic cordova build android --prod --release
  
Para poder instalarlo en un dispositivo, así como subirlo a Google Play tienes que añadirle las key.

