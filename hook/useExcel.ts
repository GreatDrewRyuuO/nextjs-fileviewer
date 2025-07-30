import { useState, useCallback } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import type { CellBase, Matrix } from "react-spreadsheet";

export const useExcelSheets = () => {
  // Stores data for all sheets
  const [sheetsData, setSheetsData] = useState<Record<string, Matrix<CellBase<any>>>>({});
  const [selectedSheet, setSelectedSheet] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  // file upload (CSV or xlxs,xls) 
  const FileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const isCSV = file.name.toLowerCase().endsWith(".csv");

    if (isCSV) {
      // If file is CSV, use parse from PapaParse
      Papa.parse(file, {
        complete: (results) => {
          // Convert CSV rows to a matrix
          const matrix = (results.data as string[][]).map((row) =>
            row.map((cell) => ({ value: cell }))
          );
          const sheetName = file.name.replace(/\.(csv)$/i, "") || "Sheet1";
          setSheetsData({ [sheetName]: matrix });
          setSelectedSheet(sheetName);
        },
        skipEmptyLines: "greedy",
      });
    } else {
      // If file is Excel, use xlsx from SheetJS
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target?.result;
        if (!data) return;

        const wb = XLSX.read(data, { type: "array" });
        const allSheets: Record<string, Matrix<CellBase<any>>> = {};

        wb.SheetNames.forEach((sheetName) => {
          const ws = wb.Sheets[sheetName];
          if (!ws) return;

          // Convert 2D Array
          const jsonData = XLSX.utils.sheet_to_json(ws, {
            header: 1,
            defval: "",
            blankrows: true,
            range: ws["!ref"],
          }) as any[][];

          allSheets[sheetName] = jsonData.map((row) =>
            row.map((cell) => ({ value: cell }))
          );
        });

        setSheetsData(allSheets);
        setSelectedSheet(wb.SheetNames[0] ?? "");
      };
      reader.readAsArrayBuffer(file);
    }

    // Reset Input
    e.target.value = "";
  }, []);

  // Generates Excel File(.xlsx)
  const DownloadExcel = useCallback(() => {
    const wb = XLSX.utils.book_new();
    Object.entries(sheetsData).forEach(([sheetName, matrix]) => {
      const ws = XLSX.utils.aoa_to_sheet(
        matrix.map((row) => row.map((cell) => cell?.value))
      );
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    const downloadName = (fileName?.replace(/\.(xlsx|xls|csv)$/i, "") || "downloaded-file") + "-downloaded.xlsx";
    XLSX.writeFile(wb, downloadName);
  }, [sheetsData, fileName]);

  // Generates CSV File
  const DownloadCSV = useCallback(() => {
    const matrix = sheetsData[selectedSheet];
    if (!matrix) return;

    // Convert matrix to CSV string
    const csvContent = matrix
      .map((row) => row.map((cell) => `"${cell?.value ?? ""}"`).join(","))
      .join("\n");

    // Create CSV File
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = (fileName?.replace(/\.(xlsx|xls|csv)$/i, "") || "sheet") + "-downloaded.csv";
    link.click();
  }, [selectedSheet, sheetsData, fileName]);

  // Edit data in Sheet
  const DataChange = useCallback(
    (newData: Matrix<CellBase<any>>) => {
      if (!selectedSheet) return;
      setSheetsData((prev) => ({
        ...prev,
        [selectedSheet]: newData,
      }));
    },
    [selectedSheet]
  );

  // Return Component
  return {
    sheetsData,
    selectedSheet,
    fileName,
    FileUpload,
    DownloadExcel,
    DownloadCSV,
    DataChange,
    setSelectedSheet,
  };
};