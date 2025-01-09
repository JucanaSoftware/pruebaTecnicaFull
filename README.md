
# Prueba Tecnica LER Preveción

Aque mostrare el proceso para ejecutar los proyectos back-end y front-end.

Para esto es necesario tener instalado lo siguente:

- Angular 18 o superior.
- Node JS 20.17.0 o superior.
- PostgreSQL 17 o superior.



## Configuracion de la base de datos

Vamos a iniciar con la configuración de la base de datos,en nuestro gestor de base de datos, por ejemplo PgAdmin.

Vamos a crear la base de datos; este es un ejemplo de cómo podemos hacerlo.

```sql
  CREATE DATABASE db_node;
```

Luego crearemos la tabla correspondiente:

```sql
  CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
    );
```

Para insertar datos para probar podemos ayudarnos de la siguiente Query:

```sql
 INSERT INTO public.usuarios(
     nombre, correo, edad)
    VALUES ( 'Ted Mosby', 'mosbyted@mail.com', 40);
 );
```
## Ejecutar Back-end

Es importante que antes de ejecutar el Back-end debemos validar que las credenciales de acceso la base de datos sean las correctas, para eso abrimos la carpeta llamada api_prueba, iremos a la carpeta config y editaremos el archivo dbconfig. El cual contiene esta sección de código:

```php
  const pool = new Pool({
  user: 'tu_usuario*',    
  host: 'localhost',      
  database: 'tu_base_de_datos*', 
  password: 'tu_clave_de_postgres*', 
  port: 5432,              
});
```
Cambiaremos los datos que contengan el asterisco por los datos correspondientes a nuestra configuración.

Vamos a abrir una terminal ubicados dentro de la carpeta llamada api_prueba y vamos a Ejecutar:

```bash
  node index.js
```
#### Vamos a ayudarnos de Postman para verificar que la API con la siguiente dirección usando el método GET:

```http
  GET http://localhost:3000/api/data
```
## Ejecutar Front-end

Vamos a abrir una terminal ubicados dentro de la carpeta llamada frontend_prueba y vamos a Ejecutar:

```bash
  ng serve
```
Luego nos dirá en que dirección donde de desplego la aplicación normalmente es:
```http
   http://localhost:4200/
```



