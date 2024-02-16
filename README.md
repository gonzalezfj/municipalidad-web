
# 🌐 Web del Municipio · ![React Version](https://img.shields.io/badge/react-18.2.0-blue)

El proyecto está destinado a la creación de la página web de la Municipalidad de Capital.

El objetivo es crear una página web que sea intuitiva, informativa y eficiente para todos los ciudadanos.

La página web va a brindar

* Información institucional, mediante la cual los ciudadanos van a poder conocer los representantes, y también acceder a documentos oficiales
* Servicios en línea, para agilizar trámites como solicitudes de permisos, pago de impuestos, sacar turnos, etc.
* Transparencia, para mantener informado a los ciudadanos
* Canales de contacto y comunicación

## Iniciar a programar

Para empezar a programar, instalar los paquetes del proyecto con el comando

    npm install

Una vez instalados los paquetes, es posible levantar un servidor local de desarrollo, con *hot reload* para ver los cambios en tiempo real, con el comando

    npm run dev

Si se necesita tener una previsualización de producción, el siguiente comando compila la aplicación y levanta un servidor de testeo

    npm run preview
    ## Contribución

Para poder contribuir en el proyecto, hay algunas consideraciones a tener en cuenta.

Se va a seguir una estrategia de repositorio [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), y para los *commits* las convenciones que especifica [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification). Esto es parte de facilitar la colaboración entre los desarrolladores, como también para mantener un orden y estructura del código fuente.

Previamente, para realizar *commits* deben pasarse las validaciones del *linter*, como también de los test unitarios (próximamente).

Así mismo, para poder hacer un *push* al repositorio remoto se va a validar que los *commits* cumplan con la convención previamente nombrada.

Entonces, el desarrollador deberá tener en cuenta lo siguiente al realizar cambios en el repositorio

* Cumplir con las validaciones del linter
* Pasar los tests unitarios (próximamente)
* Cumplir con la convención de *Conventional Commits*

## Soporte

El desarrollo de la página web está a cargo del área de Innovación de la Municipalidad de Capital de San Juan.

En caso de tener que realizar cambios sobre el mismo, contactarse con el equipo de desarrollo web por los canales de comunicación oficial (Discord).
