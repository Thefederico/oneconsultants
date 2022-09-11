# Prueba técnica One consultants

## Tecnologías utilizadas

-- Client: 

- Empaquetador: VIte Js 📦

- React / hooks ⚙️

- TypeScript ₸

- TailwindCss 🍃

- Redux / ToolKit 🛠️

-- Server:

- Docker 🚢

- Nestjs 🦁

- PostgreSQL 🐘

## Estructura de carpetas

```
server
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ docker-compose.yml
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ sql
│  ├─ courses_table.sql
│  └─ users_table.sql
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ config
│  │  └─ configuration.ts
│  └─ main.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json
```

```
client
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
├─ src
│  ├─ App.tsx
│  ├─ app
│  │  └─ store.ts
│  ├─ assets
│  ├─ components
│  │  ├─ DataAcademic.tsx
│  │  ├─ DataPersonal.tsx
│  │  ├─ Header.tsx
│  │  ├─ Modal.tsx
│  │  └─ TableRegister
│  │     ├─ CoursesStudents.tsx
│  │     ├─ index.tsx
│  │     └─ useStudents.hook.ts
│  ├─ features
│  │  └─ students
│  │     └─ students.slice.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ types.ts
│  └─ vite-env.d.ts
├─ tailwind.config.cjs
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
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




