# Scrubs Wiki

Este front pretende comunicarse con un backend con información de la serie Scrubs.

Este proyecto se hará utilizando Redux.

## Estructura

- [ ] *Inicio*: Mostrará información sobre cómo utilizar el sitio
- [ ] *Personajes*: Listado de los personajes dentro en la API
- [ ] *Favoritos*: Personajes seleccionados por el usuario
- [ ] *Nuevo personaje*: Permite añadir un personaje de la serie
- [ ] *Detalles*: Muestra los detalles del personaje seleccionado

## Componentes

- Home
- Menu
- Characters => Componente que estructura la página de personajes
- Card => Ficha de personaje genérica
- Details => Componente que estructura la página de detalles
- DetailsCard => Ficha de personaje con datos extendidos
- NewCharacter => Formulario para introducir un nuevo personaje en la "API"

## Responsabilidades

- Home:
  - Renderizar la información inicial
  - Recibir del estado cuántos elementos hay cargados en la API
- Menu:
  - Renderiza el listado de opciones con las secciones de las web
  - Interacciona onClick con el usuario para ir a las distintas secciones
- Characters:
  - Renderiza los distintos componentes Card con la información básica de cada personaje
  - Recibe del estado el listado de personajes a cargar
  - Envía por props la información del personaje a cargar al componente Card
- Card:
  - Renderiza un objeto con la información del personaje
  - Recibe por props la información a mostrar
  - OnClick actualiza en el estado la información actual y navega a detalles
- Detalles:
  - Renderiza el componente DetailsCard
  - Recibe del estado la información del personaje actual
  - Envía por props la información al componente DetailsCard
- DetailsCard:
  - Renderiza una tarjeta con la información extendida de un personaje
  - Recibe por props la información a utilizar
- NewCharacter:
  - Renderiza un formulario para la creación de un personaje
  - Envía la información al hook para crear un personaje nuevo en el servidor

## Dudas

- Cómo gestionar correctamente los errores del hook y sus tests.

- Cómo testear el error de un método del propio hook que no llama al repo.
