# Plantilla para Node.js

Una applicación que simula las cuatro operaciones básicas de una calculadora a modo de demostración. Estas operaciones puede ser vistas en los recursos del controlador:
- /calc
  - /add
  - /sub
  - /mul
  - /div

Esta plantilla incluye:

- ES6 a traves de [babel](https://babeljs.io/setup#installation), para más detalles ver [./.babelrc](./.babelrc).
- [EsLint](https://eslint.org/docs/user-guide/getting-started), para más detalles ver [./.estlintrc.json](./..eslintrc.json).
- [Prettier](https://prettier.io/docs/en/editors.html) , para más detalles ver [./.prettierrc](./.prettierrc).
- Testing con [jest](https://jestjs.io/) y [supertest](https://github.com/visionmedia/supertest#readme)

## Comandos:

- `start`, inicia el servidor en productivo.
- `start:dev`, inicia el servidor en modo de desarrollo.
- `test`, Ejecuta las pruebas unitarias.
- `build`, compila todo nuestro proyecto.
- `build:babel`, compila nuestra carpeta src con babel.
- `prettier`, ejecuta prettier.
- `prettier:fix`, ejecuta prettier en modo de sobre-escritura.
