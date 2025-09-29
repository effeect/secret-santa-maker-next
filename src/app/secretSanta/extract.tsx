"use client";

import { parse } from "json2csv";

// To handle the pdf export
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Props = {
    data : { giver: string; receiver: string }[];
    filename? : string;
}

export function ExportData({ data, filename = "secret_santa_assignments" }: Props) {
    if (!data || data.length === 0) {
        return;
    }

    // Function to handle CSV export, using json2csv to handle this
    const handleExportCSV = () => {
        const csv = parse(data);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${filename}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to handle PDF export, using jsPDF and jspdf-autotable
    const handleExportPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            head: [['Giver', 'Receiver']],
            body: data.map(item => [item.giver, item.receiver]),
        });
        doc.save(`${filename}.pdf`);
    };

    // Render two buttons for exporting data
    return (
        <div className="flex justify-center mb-6 items-center gap-4">
            <button
                onClick={handleExportCSV}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Export as CSV
            </button>
            <button
                onClick={handleExportPDF}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Export as PDF
            </button>
        </div>
    );

}