const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12 mb-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        ← Prev
      </button>

      <span className="text-sm text-gray-500">
        <span className="text-red-400 font-bold text-base">{page}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-400">{totalPages}</span>
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
