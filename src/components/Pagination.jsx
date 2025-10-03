// Pagination.jsx
const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-5 py-2 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        ⬅ Prev
      </button>

      <span className="text-lg font-medium text-gray-800">
        Page <span className="text-blue-600">{page}</span> of{" "}
        <span className="text-blue-600">{totalPages}</span>
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-5 py-2 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next ➡
      </button>
    </div>
  );
};

export default Pagination;
