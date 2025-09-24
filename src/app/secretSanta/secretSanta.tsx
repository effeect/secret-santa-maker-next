"use client";
import { useState } from "react";

import { ExportData } from "./extract";
import CreateTable from "./createTable";

export default function SecretSanta() {
    // Not sure if I want to use phone numbers or email addresses.
    interface Participant {
        name: string;
        contact_info: string;
    }

    // State to hold the list of participants
    const [participants, setParticipants] = useState<Participant[]>([{ name: "", contact_info: "" }]);
    const [assignments, setAssignments] = useState<{ giver: string; receiver: string }[]>([]);

    // In order to change the field of said row, we need to create a function that will handle the changes when they come
    const handleChange = (index: number, field: keyof Participant, value: string) => {
        setParticipants(prev => {
            const newParticipants = [...prev];
            newParticipants[index] = { ...newParticipants[index], [field]: value };
            return newParticipants;
        });
    }

    // Function to add a new participant
    const addRow = () => {
        // Note for prev, its reserved in react for the previous state
        setParticipants(prev => [...prev, { name: "", contact_info: "" }]);
    }

    const removeRow = (index: number) => {
        if (participants.length <= 1) return; // Prevent removing the last row
        setParticipants(prev => prev.filter((_, i) => i !== index));
    }

    const generateSecretSanta = () => {
        if (participants.length < 2) {
            alert("Please add at least two participants.");
            return;
        }

        // Create a copy of participants to shuffle soon
        const givers = [...participants];
        const receivers = [...participants];

        // Shuffle receivers to ensure randomness
        for (let i = receivers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
        }

        // Dirty but works, ensure no one is their own receiver
        for (let i = 0; i < givers.length; i++) {
            if (givers[i].name === receivers[i].name) {
                // Swap with the next person (or the first if at the end)
                const swapIndex = (i + 1) % receivers.length;
                [receivers[i], receivers[swapIndex]] = [receivers[swapIndex], receivers[i]];
            }
        }

        const assignments = givers.map((giver, index) => ({
            giver: giver.name,
            receiver: receivers[index].name,
        }));
        console.log("Assignments:", assignments);
        setAssignments(assignments);
        return assignments;
    }

    return (<>
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Secret Santa Maker</h1>
            <p className="mb-4">Enter the names and contact information of participants below. Once everyone is added, click "Generate Secret Santa" to create the assignments.</p>
            <CreateTable participants={participants} handleChange={handleChange} removeRow={removeRow} generateSecretSanta={
                generateSecretSanta
            }/>
            <div className="mb-4">
            <ExportData data={assignments} filename="secret_santa_assignments" />
            </div>
            <div className="space-x-2">
            </div>
        </div>
    </>)

}