# Instrucciones para iniciar la aplicación Flask

Sigue estos pasos para configurar y ejecutar la aplicación:

1. **Crea un entorno virtual de Python**: Ejecuta el comando `python -m venv .venv`. Esto creará un directorio llamado `.venv` que contendrá el entorno virtual.

2. **Activa el entorno virtual**: Ejecuta el comando adecuado para tu sistema operativo. En Windows, puedes usar `.venv\Scripts\activate.bat`. En Linux o macOS, puedes usar `source .venv/bin/activate`. Esto activará el entorno virtual, permitiéndote instalar paquetes de Python que no afectarán a tu sistema global.

3. **Instala las dependencias del proyecto**: Ejecuta el comando `pip install -r requirements.txt` para instalar todas las bibliotecas necesarias para ejecutar la aplicación Flask desde el archivo `requirements.txt`.

4. **Inicia la aplicación**: Ejecuta el comando `python server/application.py`. Esto iniciará el servidor Flask y podrás acceder a la aplicación en tu navegador web.

Nota: Estos pasos asumen que estás en el directorio raíz del proyecto donde se encuentra el archivo `README.md`. Asegúrate de ejecutar los comandos en el directorio correcto.

5. **Instala MongoDB**: 

   - En Windows:
     1. Descarga el instalador de MongoDB Community Server desde [la página oficial de MongoDB](https://www.mongodb.com/try/download/community).
     2. Ejecuta el instalador y sigue las instrucciones en pantalla.
     3. Asegúrate de que MongoDB se ha añadido a tu PATH. Si seleccionaste la opción de instalar MongoDB como un servicio durante la instalación, debería haberse añadido automáticamente.

   - En Linux (Ubuntu): (No probado)
     1. Importa la clave pública utilizada por el sistema de gestión de paquetes con el siguiente comando: `wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`
     2. Crea una lista de archivos para MongoDB con el comando: `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`
     3. Recarga la base de datos local de paquetes con el comando: `sudo apt-get update`
     4. Instala MongoDB con el comando: `sudo apt-get install -y mongodb-org`
     5. Inicia MongoDB con el comando: `sudo systemctl start mongod`
     6. Verifica que MongoDB ha iniciado correctamente con el comando: `sudo systemctl status mongod`
     7. Para que MongoDB se inicie automáticamente al arrancar el sistema, usa el comando: `sudo systemctl enable mongod`

6. **Configura la cadena de conexión a MongoDB**: Crea un archivo `.env` en el directorio raíz de tu proyecto con la siguiente línea: `MONGO_URI=mongodb://localhost:27017/myDatabase`. Asegúrate de reemplazar `mongodb://localhost:27017/myDatabase` con tu cadena de conexión a MongoDB.
