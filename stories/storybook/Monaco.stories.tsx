import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MonacoEditorComponent from "../pages/Monaco";

const meta = {
  title: "Components/MonacoEditor",
  component: MonacoEditorComponent,
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component for the Monaco Editor, styled with Tailwind CSS.",
      },
    },
  },
  args: {
    initialValue: `function greet(name: string) {\n  console.log(\`Hello, \${name}!\`);\n}\n\ngreet("World");`,
    language: "typescript",
    height: "400px",
    theme: "vs-light",
  },
  argTypes: {
    initialValue: {
      control: "text",
      description: "Initial code content for the editor.",
    },
    language: {
      control: "select",
      options: ["javascript", "typescript", "html", "css", "json", "python"],
      description: "The programming language for syntax highlighting.",
    },
    height: {
      control: "text",
      description: 'Height of the editor (e.g., "400px", "100vh").',
    },
    onChange: {
      action: "codeChanged",
      description: "Callback function triggered when editor content changes.",
    },
    options: {
      control: "object",
      description: "Additional options to pass directly to the Monaco Editor.",
    },
    theme: {
      control: "select",
      options: ["vs-light", "vs-dark"],
      description: "The theme of the Monaco editor.",
    },
  },
} satisfies Meta<typeof MonacoEditorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const JavascriptExample: Story = {
  args: {
    initialValue: `console.log('This is a JavaScript example!');\n\nconst sum = (a, b) => a + b;`,
    language: "javascript",
    height: "300px",
    theme: "vs-dark",
  },
};

export const PythonExample: Story = {
  args: {
    initialValue: `def factorial(n):\n  if n == 0:\n    return 1\n  else:\n    return n * factorial(n-1)\n\nprint(factorial(5))`,
    language: "python",
    height: "500px",
    options: {
      readOnly: false,
      wordWrap: "on",
    },
    theme: "vs-light",
  },
};

export const ReadOnlyEditor: Story = {
  args: {
    initialValue: `// This editor is read-only.\nconst message = "You cannot edit this code.";\nconsole.log(message);`,
    language: "typescript",
    height: "250px",
    options: {
      readOnly: true,
      minimap: { enabled: false },
    },
    theme: "vs-dark",
  },
};
