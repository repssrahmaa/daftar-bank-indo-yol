"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BankList from "./components/BankList";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";

export default function Home() {
  const baseURL = "https://bank.thecloudalert.com/api/get";
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBank, setSelectedBank] = useState(null);
  const itemsPerPage = 5;

  // Fetch data from API
  const fetchData = async (searchKeyword = "") => {
    try {
      // Format the API URL with the search keyword
      const url = searchKeyword
        ? `${baseURL}/?keyword=${encodeURIComponent(searchKeyword)}`
        : baseURL;

      console.log("Fetching from URL:", url); // Debugging URL

      const response = await fetch(url);

      // Check for response status
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      console.log("Fetched Data:", result); // Debugging Data

      if (result?.data?.length > 0) {
        setData(result.data);
      } else {
        setData([]); // Reset if no data is found
        console.warn("No data found for the given keyword.");
      }

      setCurrentPage(1); // Reset to the first page after fetching
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setData([]); // Reset data on error
    }
  };

  // Re-fetch data when the keyword changes
  useEffect(() => {
    fetchData(keyword);
  }, [keyword]);

  // Pagination logic
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Daftar Bank di Indonesia
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Cari bank..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-4 mb-6 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Bank List */}
        <BankList data={paginatedData} onSelect={setSelectedBank} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />

        {/* Modal Detail */}
        {selectedBank && (
          <Modal bank={selectedBank} onClose={() => setSelectedBank(null)} />
        )}
      </main>
    </>
  );
}
