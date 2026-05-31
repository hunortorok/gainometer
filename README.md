# Gainometer

A modern workout tracking web app built as a frontend engineering portfolio project. Gainometer is designed to demonstrate type-safe form handling, component-driven UI design, and an offline-first mindset for managing workouts directly in the browser.

## Screenshot

> Add your screenshot here once the UI is ready.

```markdown
![Gainometer screenshot](./public/screenshot.png)
```

## Description

Gainometer is an early-stage workout tracking application focused on a local-first experience. It is built with React, TypeScript, React Router v7, ShadCN UI components, and advanced form tooling. The goal is to support workout creation, editing, and tracking in a polished, maintainable frontend architecture while preparing the app for offline persistence and JSON import/export.

## Features

- Workout editor prototype with React Hook Form and Zod validation
- Date picker integration and workout metadata management
- Component-driven UI using ShadCN-ready form and layout primitives
- Dashboard, workout list, and editor routes with React Router v7
- Structured form schema for workouts, exercises, and sets
- Local-first application architecture planned for browser persistence
- JSON-friendly data model for future import/export workflows

## Tech Stack

- React 19
- React Router v7
- TypeScript
- Vite
- Tailwind CSS
- ShadCN UI
- React Hook Form
- Zod v3
- @hookform/resolvers
- date-fns
- lucide-react
- sonner

## Architecture

Gainometer is organized as a client-side React application with route-based page modules and reusable UI components.

- `app/routes/` contains page entry points for `dashboard`, `workoutList`, and `workoutEditor`
- `app/components/ui/` contains shared design system primitives for buttons, cards, inputs, calendars, tooltips, and more
- `react-hook-form` and `zod` are used together to keep form validation type-safe and declarative
- The workout editor is structured around a form schema that models workouts, exercises, labels, and sets
- The project is architected for future offline-first persistence using browser storage and Dexie.js-style IndexedDB integration

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

Navigate to `http://localhost:5173` to open the app.

### Build for production

```bash
pnpm build
```

### Run production server

```bash
pnpm start
```

## Development Notes

- The workout editor is the current priority area and is built with a Zod-backed `useForm` schema
- The app uses ShadCN-style component wrappers for consistent spacing, input state, and accessible patterns
- Route metadata is defined in each page module with React Router v7
- Current pages are scaffolded and ready for deeper workout list and dashboard data integration
- Form state is surfaced with `Controller` for controlled UI components like the date picker

## Current Status

Gainometer is in active development. The core editor prototype exists, but dynamic exercise and set management are still being built out. The app currently includes placeholder routing for the workout list and dashboard while the workout form and local persistence architecture are being refined.

## Roadmap

- Add dynamic workout structure with `useFieldArray` for exercises and sets
- Implement offline-first persistence with IndexedDB / Dexie.js
- Build workout list storage and load/save workflows
- Add JSON import/export for workouts and training history
- Introduce progression analytics and performance tracking
- Add exercise categorization, labels, and training program support

## Folder Structure

```text
├── app/
│   ├── components/
│   │   └── ui/            # shared design system primitives
│   ├── routes/
│   │   ├── dashboard.tsx
│   │   ├── workoutEditor.tsx
│   │   └── workoutList.tsx
│   ├── root.tsx
│   └── routes.ts
├── public/                # static assets
├── workout.json           # sample workout fixture
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## License

No license file is included in this repository yet. Add an open source license if you want to share or publish this project.
