"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

interface MonacoEditorProps {
  initialValue?: string;
  language?: string;
  theme?: "vs-light" | "vs-dark";
  onChange?: (value: string | undefined) => void;
  options?: Record<string, any>;
  height?: string;
}

const MonacoEditorComponent: React.FC<MonacoEditorProps> = ({
  initialValue = "// Start coding...",
  language = "javascript",
  onChange,
  options = {},
  height = "400px",
}) => {
  const editorRef = useRef<any>(null);
  const [editorValue, setEditorValue] = useState(initialValue);
  const { theme } = useTheme();

  const EditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const EditorChange = (value: string | undefined) => {
    setEditorValue(value || "");
    if (onChange) {
      onChange(value);
    }
  };

  const monacoTheme = theme === "dark" ? "vs-dark" : "vs-light";

  return (
    <div className="rounded-lg border overflow-hidden shadow-sm">
      <Editor
        height={height}
        language={language}
        defaultValue={initialValue}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: "on",
          fontSize: 14,
          ...options,
        }}
        onMount={EditorDidMount}
        onChange={EditorChange}
      />
    </div>
  );
};

export default MonacoEditorComponent;
