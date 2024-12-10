import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    // Implement file upload logic here (API call)
    console.log(file);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Upload Photo</h2>
      <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
      </form>
    </div>
  );
}