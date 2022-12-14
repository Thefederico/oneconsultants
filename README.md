# Prueba tΓ©cnica One consultants

## TecnologΓ­as utilizadas

-- Client: 

- Empaquetador: VIte Js π¦

- React / hooks βοΈ

- TypeScript βΈ

- TailwindCss π

- Redux / ToolKit π οΈ

-- Server:

- Docker π’

- Nestjs π¦

- PostgreSQL π

## Estructura de carpetas

```
server
ββ .eslintrc.js
ββ .gitignore
ββ .prettierrc
ββ README.md
ββ docker-compose.yml
ββ nest-cli.json
ββ package-lock.json
ββ package.json
ββ sql
β Β ββ courses_table.sql
β Β ββ users_table.sql
ββ src
β Β ββ app.controller.spec.ts
β Β ββ app.controller.ts
β Β ββ app.module.ts
β Β ββ app.service.ts
β Β ββ config
β Β β Β ββ configuration.ts
β Β ββ main.ts
ββ test
β Β ββ app.e2e-spec.ts
β Β ββ jest-e2e.json
ββ tsconfig.build.json
ββ tsconfig.json
```

```
client
ββ .gitignore
ββ index.html
ββ package-lock.json
ββ package.json
ββ postcss.config.cjs
ββ public
ββ src
β  ββ App.tsx
β  ββ app
β  β  ββ api
β  β  β  ββ fetch.ts
β  β  ββ store.ts
β  ββ assets
β  β  ββ TrashIcon.tsx
β  ββ components
β  β  ββ DataAcademic.tsx
β  β  ββ DataPersonal.tsx
β  β  ββ Header.tsx
β  β  ββ Modal.tsx
β  β  ββ SelectStatusCourse.tsx
β  β  ββ Summary.tsx
β  β  ββ TableRegister
β  β     ββ CoursesStudents.tsx
β  β     ββ index.tsx
β  β     ββ useStudents.hook.ts
β  ββ features
β  β  ββ students
β  β     ββ students.slice.ts
β  ββ index.css
β  ββ main.tsx
β  ββ types.ts
β  ββ vite-env.d.ts
ββ tailwind.config.cjs
ββ tsconfig.json
ββ tsconfig.node.json
ββ vite.config.ts
```

## Servidor en modo desarrollo

```
git clone https://github.com/Thefederico/oneconsultants.git

cd oneconsultants
cd server

# Correr contenedores de docker
docker-compose up -d

# Instalar dependencias
npm install

#Modo desarrollo
npm run start:dev
```

## Cliente en modo desarrollo

```
cd oneconsultants/client

# Instalar dependencias
npm install

#Modo desarrollo
npm run dev
```
