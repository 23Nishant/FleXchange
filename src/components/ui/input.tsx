import React from 'react';

export function Input({ id, placeholder, type = "text", maxLength }: { id: string, placeholder: string, type?: string, maxLength?: number }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
