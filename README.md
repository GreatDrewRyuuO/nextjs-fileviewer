# Next.js Fileviewer Playground

This project is a web-based playground built with **Next.js 15** and **Storybook** to showcase and test various file viewing libraries in a unified interface. It provides a convenient environment to experiment with different file types and their respective renderers.

---

## **🚀 Live Demo & Interactive Playground**

You can try out the **Next.js Fileviewer Playground** instantly on our live Storybook, hosted by Chromatic. No local installation is required.

### **[➡️ Access the Live Demo Here! ⬅️](https://68469de3cf3986310cdea5cd-bhghmpypzv.chromatic.com/)**

### **✨ What You Can Try in the Demo**

In the demo, you'll find the Storybook environment where you can interact directly with various components:

1.  **Explore Components**
    * Use the left-hand menu to browse through the Stories of the `FileViewer` component in its different states.
    * Try changing the controls in the "Addons" panel at the bottom to see how the component responds.

2.  **Test Different File Types**
    * **📄 PDF Viewer**: Select the `FileViewer/PDF` story to see how `.pdf` documents are rendered.
    * **📊 CSV/Spreadsheet Viewer**: Select the `FileViewer/CSV` story to test the rendering of `.csv` files in an interactive table format.
    * **💻 Code/Text Viewer**: Select the `FileViewer/Code` or `FileViewer/Text` stories to view code and text files like `.js`, `.ts`, and `.css`, with syntax highlighting powered by the Monaco Editor.

### 💬 Feedback

This project was created for learning and experimentation. If you encounter any issues, have ideas, or suggestions, please feel free to open an Issue on the project's repository. We welcome all feedback!

---

## 🧩 Tech Stack
-  **Next.js 15**: The React framework for building fast web applications.
-  **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
-  **TypeScript**: A strongly typed superset of JavaScript that enhances code quality and maintainability.
-  **@monaco-editor/react**: Integrates the Monaco Editor for powerful code and text file rendering.
-  **react-spreadsheet**: Renders spreadsheet files (CSV, XLS, XLSX) directly in the browser.
-  **papaparse**: Provides robust CSV parsing capabilities, supporting `react-spreadsheet`.
-  **pdfjs-dist**: The industry-standard library for rendering PDF files.
-  **TanStack Query (React Query)**: For efficient data fetching, caching, and state management of API calls.
-  **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
-  **shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS, enhancing the UI styling and component library.
-  **Storybook**: An isolated development environment for UI components, facilitating testing and showcasing.

---

## 📦 Installation

To get started with the project, clone the repository and install the dependencies:

```bash
pnpm install
```
🚀 Getting Started
You can run the Storybook environment to simulate and isolate the file viewer components:

```Bash
pnpm storybook
```
Once Storybook is running, open your browser and navigate to:

```Bash

localhost:6006
```
This will give you access to the file viewer components in an isolated environment, perfect for development and testing.

✨ Features
View various file types, including code, text, spreadsheets, and PDFs.
Easily switch between different file viewing libraries.
Isolated component development and testing with Storybook.
Modern and responsive UI with Tailwind CSS and shadcn/ui.
Efficient data handling with TanStack Query for API interactions.

License
MIT
