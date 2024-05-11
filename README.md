# Instrucciones para iniciar la aplicación Flask

Sigue estos pasos para configurar y ejecutar la aplicación:

1. **Crea un entorno virtual de Python**: Ejecuta el comando `python -m venv .venv`. Esto creará un directorio llamado `.venv` que contendrá el entorno virtual.

2. **Activa el entorno virtual**: Ejecuta el comando adecuado para tu sistema operativo. En Windows, puedes usar `.venv\Scripts\activate.bat`. En Linux o macOS, puedes usar `source .venv/bin/activate`. Esto activará el entorno virtual, permitiéndote instalar paquetes de Python que no afectarán a tu sistema global.

3. **Instala las dependencias del proyecto**: Ejecuta el comando `pip install -r requirements.txt` para instalar todas las bibliotecas necesarias para ejecutar la aplicación Flask desde el archivo `requirements.txt`.

4. **Inicia la aplicación**: Ejecuta el comando `python server/application.py`. Esto iniciará el servidor Flask y podrás acceder a la aplicación en tu navegador web.

Nota: Estos pasos asumen que estás en el directorio raíz del proyecto donde se encuentra el archivo `README.md`. Asegúrate de ejecutar los comandos en el directorio correcto.