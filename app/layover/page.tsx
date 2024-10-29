'use client'

import React, { useState } from 'react';

const FormWithList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(''); // State for the input value
  const [items, setItems] = useState<string[]>([]); // State for the list of items

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    if (inputValue.trim()) { // Ensure the input is not empty
      setItems([...items, inputValue]); // Append the input value to the list
      setInputValue(''); // Clear the input field after adding to the list
    }
  };

  // Handle item deletion
  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index)); // Remove the item at the given index
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add Items to List</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item"
          className="border rounded-lg p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add to List
        </button>
      </form>
      <ul className="mt-4 space-y-2 w-full">
        {items.map((item, index) => (
          <li key={index} className="border rounded-lg p-2 flex justify-between items-center">
            <span>{item}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormWithList;
