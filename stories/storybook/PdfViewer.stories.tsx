"use client";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PdfViewer from "../pages/Pdfviewer";

import { Button } from "@/workspace/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/workspace/components/ui/card";
import { Upload } from "lucide-react";

const meta: Meta<typeof PdfViewer> = {
  title: "Components/PDF Viewer",
  component: PdfViewer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    fileUrl: {
      control: "text",
      description: "URL of the PDF file to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Provides a file upload interface to dynamically view any local PDF file.",
      },
    },
  },
  render: () => {
    const [pdfUrl, setPdfUrl] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setPdfUrl(url);
        setFileName(file.name);
      }
    };

    return (
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen font-sans">
        <div className="max-w-7xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload PDF for Testing</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Button asChild>
                <label htmlFor="pdf-upload-story">
                  <Upload className="mr-2 h-4 w-4" /> Upload PDF
                </label>
              </Button>
              <input
                id="pdf-upload-story"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              {fileName && (
                <span className="text-sm text-gray-600">
                  Selected: <span className="font-semibold">{fileName}</span>
                </span>
              )}
            </CardContent>
          </Card>

          <div className="h-[75vh] border rounded-md">
            <PdfViewer fileUrl={pdfUrl} />
          </div>
        </div>
      </div>
    );
  },
};
