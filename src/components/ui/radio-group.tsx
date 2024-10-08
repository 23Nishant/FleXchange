import React from 'react';

export function RadioGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export function RadioGroupItem({ value, id }: { value: string, id: string }) {
  return (
    <input
      type="radio"
      id={id}
      name="paymentMethod"
      value={value}
      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    />
  );
}
