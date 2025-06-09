import React from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

import { FileText } from "lucide-react";

const workerUrl = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).href;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const thumbnailPluginInstance = thumbnailPlugin();
  const toolbarPluginInstance = toolbarPlugin();

  const { Thumbnails } = thumbnailPluginInstance;
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  return (
    <div className="h-full w-full flex text-gray-800 bg-gray-200">
      <div className="w-64 bg-white border-r border-gray-300 overflow-y-auto">
        <Thumbnails />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-300 shadow-sm">
          <Toolbar>{renderDefaultToolbar((transform) => transform)}</Toolbar>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Worker workerUrl={workerUrl}>
            {fileUrl ? (
              <Viewer
                fileUrl={fileUrl}
                plugins={[toolbarPluginInstance, thumbnailPluginInstance]}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-white">
                <FileText className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-lg font-medium">No PDF file selected.</p>
              </div>
            )}
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
