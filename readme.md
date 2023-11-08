# Proyecto Final

**Comisión 47760 - CODER HOUSE**

**Curso: Desarrolo de Aplicaciones**

---

_Nombre del Proyecto:_ **Book Exchange**

_Alumno:_ **Resanovich, Jeffrey**

_Profesor:_ **Martin, Rocío**

_Tutor:_ **Bonavia, Mateo**

_Fecha de Entrega:_ **Martes 07/11/2023**

---

[TOC]

### Introducción

La lectura es uno de los hobbies más amados en el mundo. Es una habilidad que abre puertas y oportunidades impensadas. Leer, mantiene nuestro cerebro sano y activo. ¿Cuántas veces vemos a otra persona leer un libro que nos gustaría leer o nosotros tenemos nuestra biblioteca llena de libros que ya leímos? ¿Por qué no darles una segunda, tercera, cuarta oportunidad?

### Objetivo

Crear una comunidad de intercambio de libros físicos.

### Situación Problema

La situación económica actual hace que comprar un libro sea de difícil acceso para todos debido al alto costo que tienen. Por esta razón, disminuye la cantidad de personas que tienen oportunidad de leer. Por otro lado, existen muchas personas que tienen gran cantidad de libros que ya fueron usados y que pueden significar una oportunidad de lectura para otros.

### Herramientas tecnológicas utilizadas

Las herramientas y aplicaciones tecnológicas utilizadas para este proyecto son:

- Visual Studio Code
- Node JS
- Android Studio
- React Native
  -- Core Components
- React Navigation
  -- Tab Navigator
  -- Drawer Navigator
- Expor CLIE
  -- Expo AsyncStorage
  -- Expo ImagePicker
  -- Expo Location
- Redux ToolKit
  -- RTK
- Postman

### Estructura del Proyecto

![Estructura del Proyecto](https://drive.google.com/uc?export=view&id=102Yj0mReEPO5pIP9p6ZTwwLqDapxRzzB)

### Pantallas

El proyecto está compuesto por:

#### 1. INICIO SESION Y REGISTRO

_Datos de inicio de sesion y registro de usuario_

![INICIO SESION Y REGISTRO](https://drive.google.com/uc?export=view&id=10HecyQkyKR-0iPChpEuAxDzLLIF9qvLC)

#### 2. DRAWER NAVIGATOR

_Datos de usuario y configuraciones personales_

![DRAWER NAVIGATOR](https://drive.google.com/uc?export=view&id=10IGl2OUblx5nJKcUCqcr5O_J32ED0wDM)

**NOTA:**En la pantalla de **Configuracion** se puede setear la localizacion actual como punto de intercambio y tambien permitir o no que otros usuario vean la ubicacion del punto de intercambio seteado (REQUIERE RECARGAR OTRA CUENTA DE USUARIO PARA VER EL EFECTO)

#### 3. TAB NAVIGATOR

_Biblioteca de usuario, busqueda e intercambio_

![TAB NAVIGATOR](https://drive.google.com/uc?export=view&id=10MlHobKCep_pRrqUkl3Z62MzFJQl_EoD)

**NOTA:** Se agregó un label en el tab de cada pantalla.

#### 4. OTRAS PANTALLAS

_Detalle de los libros y formulario de carga y actualizacion_

![OTRAS PANTALLAS](https://drive.google.com/uc?export=view&id=10fHdjPqx2UUzcs0qY4EYtuZ2kPdf2MhF)

**NOTA: APRENTANDO EL MISMO TAB DONDE SE ENCUENTRA PUEDE VOVER HACIA ATRAS**

#### 5. BOTONES Y FUNCIONAMIENTO:

_Para reutilizacion y manejo de datos de usuario y de libros con firebase_

![BOTONES Y FUNCIONAMIENTO](https://drive.google.com/uc?export=view&id=10b17xBKN75SMHjongziSXPyzv1AEdc9F)

|                BOTON | PANTALLA    |                                                                           FUNCIONAMIENTO                                                                            |
| -------------------: | ----------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **Editar / Borrar** | Mis libros  |                                       Solo quien carga el libro y mientras lo esta "leyendo" puede hacer estas modificaciones                                       |
|        **Compartir** | Mis libros  |                                            El usuario que tiene el libro lo puede compartir para que se pueda reseervar                                             |
|         **Reservar** | Mis libros  |                                                        Permite volver a leerlo. No aparece en las busquedas                                                         |
|         **Reservar** | Buscador    |                                         Aparecen todos los libros que no tiene el usuario y estan disponibles (compartidos)                                         |
|         **Recibido** | Intercambio |                    Una vez realizado el intercambio, este boton confirma el intercambio y permite verlo en "mis libros" en la lista de "leyendo"                    |
| **Datos de Usuario** | Intercambio | Tanto el que tiene que recibir el libro como el que lo tiene que entregar puede ver los datos de usuario y ver el mapa del punto de intercambio, si esta disponible |

#### 6. PERMISOS:

_Manejo de permisos_

![PERMISOS](https://drive.google.com/uc?export=view&id=10rv9ZuMjY4k6Pq1f82FTN3kmAQlzMPA0)

**NOTAS FINALES:**
_La app esta aun en proceso de produccion.
Errores no tiene, pero hay muchas mejoras por implementar:_

- Optimizar lectura de usuario y libros.
- Pantallas de notificaciones.
- Chat entre usuarios
- Etc.

#### END
