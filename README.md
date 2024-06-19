instalar python:
sudo apt update
sudo apt install python3-pip
pip3 --version

instalar las librerias de python que estan en los requerimientos del backend, todas se pueden instalar con pip

instalar nginx:

sudo apt install nginx
systemctl status nginx

una vez se tienen instaladas esas dependencias en un sistemas linux
al hacer un git clone del proyecto configurar el script default de nginx con el siguiente codigo para nginx
en la carpeta:

cd etc/nginx/sites-available/

con algun editor de texto como vim acceder al script por defaulr de nginx o copiar y pegar con un nombre nuevo
cp default emojinginx:

vim emojinginx

con dd borramos rapido en vim
entrar a modo i para poder pegar en vim

pegar siguiente codigo:

# Define upstream group for backend servers
upstream backend_servers {
    server localhost:5000 weight=1;
    server localhost:5001 weight=1;
}

# Main server configuration
server {
    listen 80; # Listen on port 80

    # Serve static files from the 'public' directory
    location / {
        root /home/odrigor/Desktop/emojiposition/emoji-position/front/dist;
        index index.html index.htm;
    }

    # Proxy requests to backend servers
    location /api {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

Luego de pegado el codigo apretamos esc, shit + 1, escribimos !wq, para guardar y salir
verificamos el archivo en:

cd .. 
cd sites-enabled/

si editamos el script defualt no es necesario eliminar y crear un nuevo puntero, pero si copiamos el archivo, es necesario eliminar el puntero antiguo
rm default
crear el nuevo puntero:

ln -s ../sites-aviable/emojinginx

verificamos que se haya creado el puntero correctamente con:

ll

reiniciamos nginx:

sudo nginx  -s reload

levantamos nuestros servidores backend:

python3 server.py
python3 server.py

accedemos a nuestra ip publica desde el navegador para verficiar que todo esta funcionando.
para saber la ip publica:

ip r
