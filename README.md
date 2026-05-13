# Contact Manager App

A simple contact management app built with React 19, TypeScript 6, and Vite.

## Tech Stack

- **React** 19.2.4
- **TypeScript** 6.0.2
- **Vite** 6
- **Semantic UI** 2.4.1 (CDN)
- **uuid** 9

## Features

- Add contacts with name and email
- Delete contacts
- Persists contacts to `localStorage`

## Project Structure

```
src/
├── index.tsx           # App entry point
├── types.ts            # Shared TypeScript interfaces
├── declarations.d.ts   # Asset type declarations
└── components/
    ├── App.tsx         # Root component, state management
    ├── App.css         # Custom styles
    ├── Header.tsx      # Page header
    ├── AddContact.tsx  # Add contact form
    ├── ContactList.tsx # Renders list of contacts
    └── ContactCard.tsx # Individual contact card
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Type check

```bash
npx tsc --noEmit
```

### Build for production

```bash
npm run build
```

Output goes to the `build/` folder.

### Preview the production build

```bash
npm run preview
```

## Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
