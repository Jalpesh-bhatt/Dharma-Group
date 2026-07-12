"use client"; // Required for Zustand hooks

import { create } from 'zustand'; // Ensure this import exists
import { BuilderStore } from "@/types/store"; // Adjust path as needed

// Define your store correctly
export const useBuilderStore = create<BuilderStore>((set) => ({
  card: { /* your default values */ },
  history: { /* your default values */ },
  // ... rest of your store logic
}));

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>This is your contact page content.</p>
    </main>
  );
}

