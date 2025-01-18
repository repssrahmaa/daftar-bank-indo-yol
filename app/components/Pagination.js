export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 5;
  const currentBlock = Math.ceil(currentPage / maxPagesToShow);
  const startPage = (currentBlock - 1) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  return (
    <div className="flex justify-center mt-8 space-x-2">
      {/* Tombol Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
      >
        Previous
      </button>

      {/* Tombol Halaman */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded-lg transition duration-300 ${
              currentPage === page
                ? "bg-blue-600 text-white font-semibold"
                : "bg-blue-100 hover:bg-blue-300 text-blue-700"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Tombol Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
      >
        Next
      </button>
    </div>
  );
}
