import React from "react";
import Spreadsheet from "react-spreadsheet";
import { useExcelSheets } from "@/hook/useExcel";
import { Button } from "@/workspace/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/workspace/components/ui/card";
import { Upload, Download, FileText } from "lucide-react";

interface SpreadsheetsProps {
  showUploadButton?: boolean;
  showDownloadButton?: boolean;
}

export default function Spreadsheets({
  showUploadButton = true,
  showDownloadButton = true,
}: SpreadsheetsProps) {
  const {
    sheetsData,
    selectedSheet,
    fileName,
    FileUpload,
    DownloadExcel,
    DataChange,
  } = useExcelSheets();

  const sheetNames = Object.keys(sheetsData);
  const currentSheetData = sheetsData[selectedSheet] || [];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-800">
            Excel & CSV Editor
          </h1>
          <p className="text-gray-500 mt-1">
            Upload, edit, and download your spreadsheet files.
          </p>
        </header>

        <Card>
          <CardContent className="p-4 flex flex-wrap items-center gap-4">
            {showUploadButton && (
              <>
                <Button asChild>
                  <label htmlFor="file-upload">
                    <Upload className="mr-2 h-4 w-4" /> Upload File
                  </label>
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv, .xlsx, .xls"
                  onChange={FileUpload}
                  className="hidden"
                />
              </>
            )}
            {showDownloadButton && (
              <Button
                onClick={DownloadExcel}
                disabled={sheetNames.length === 0}
                variant="secondary"
              >
                <Download className="mr-2 h-4 w-4" /> Download as Excel
              </Button>
            )}
          </CardContent>
        </Card>

        {sheetNames.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>{fileName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[60vh] overflow-auto border rounded-md">
                <Spreadsheet data={currentSheetData} onChange={DataChange} />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="h-80 w-full">
            <CardContent className="flex flex-col items-center justify-center h-full gap-4">
              <FileText className="h-16 w-16 text-gray-300" />
              <div className="text-center">
                <p className="text-lg font-medium text-gray-600">
                  No file selected
                </p>
                <p className="text-gray-500">
                  Please upload a file to get started.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
