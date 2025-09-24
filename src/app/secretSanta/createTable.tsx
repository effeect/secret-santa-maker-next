import React from "react";

interface Participant {
    name: string;
    contact_info: string;
}

// These props will be passed from the parent component
interface Props {
  participants: Participant[];
  handleChange: (index: number, field: keyof Participant, value: string) => void;
  removeRow: (index: number) => void;
  generateSecretSanta?: () => void; // Optional prop for generating Secret Santa
}

export default function CreateTable({ participants, handleChange, removeRow, generateSecretSanta }: Props) {

    return(<>
        <table className="table-auto border-collapse border border-gray-300 w-full mb-4">
        <thead>
          <tr className="bg-black-100 font-bold">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            {/* <th className="border border-gray-300 px-4 py-2">Contact Info</th> */}
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  id={`name-${index}`}
                  type="text"
                  value={row.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full border rounded px-2 py-1"
                />
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">
                <input
                  id={`contact-${index}`}
                  type="text"
                  value={row.contact_info}
                  onChange={(e) => handleChange(index, "contact_info", e.target.value)}
                  className="w-full border rounded px-2 py-1"
                />
              </td> */}

              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => removeRow(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => handleChange(participants.length, "name", "")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Participant
      </button>
      <button
        onClick={generateSecretSanta}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Secret Santa
      </button>
    </>)
}