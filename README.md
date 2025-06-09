# Next.js Fileviewer Playground

This project is a web-based playground built with **Next.js 15** and **Storybook** to showcase and test various file viewing libraries in a unified interface. It provides a convenient environment to experiment with different file types and their respective renderers.

---

## 🧩 Tech Stack

- **Next.js 15** – The latest React framework for building high-performance web applications.
- **React** – A declarative library for creating dynamic and interactive UIs.
- **TypeScript** – Adds static typing to JavaScript for better maintainability.
- **@monaco-editor/react** – Brings VS Code's powerful editor into the browser for code and text rendering.
- **react-spreadsheet** – View and edit spreadsheet formats (CSV, XLS, XLSX) in-browser.
- **papaparse** – Fast and reliable CSV parser used alongside `react-spreadsheet`.
- **sheetJS** – Advanced spreadsheet parsing and exporting (supports Excel and CSV).
- **pdfjs-dist** – Core PDF rendering engine used by modern PDF viewers.
- **react-pdf** – A component-based PDF viewer built on top of `pdfjs-dist`.
- **TanStack Query (React Query)** – Handles data fetching, caching, and background updates.
- **Tailwind CSS** – A utility-first framework for building custom and responsive designs.
- **shadcn/ui** – Accessible, themeable, and reusable UI components powered by Radix UI and Tailwind CSS.
- **Storybook** – A powerful environment for developing and testing UI components in isolation.

---

## 📦 Installation

To get started with the project, clone the repository and install the dependencies:

```bash
pnpm install
```

## 🚀 Getting Started

You can run the Storybook environment to simulate and isolate the file viewer components:

```bash
pnpm storybook
```

Once Storybook is running, open your browser and navigate to:

```bash
[http://localhost:6006](http://localhost:6006)
```

This will give you access to the file viewer components in an isolated environment, perfect for development and testing.

✨ Key Features

🔍 Preview multiple file types – Code, text, spreadsheets (CSV/XLSX), and PDF files.

🔄 Switch between libraries – Compare different rendering approaches in one interface.

🧪 Isolated UI testing – Built-in Storybook support for modular development.

🎨 Modern UI – Built with Tailwind CSS and shadcn/ui for a clean, responsive experience.

⚡ Smart data handling – Uses TanStack Query for seamless API and state management.

## License

[MIT](./LICENSE)
