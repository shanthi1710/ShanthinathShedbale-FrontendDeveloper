const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border rounded mr-2"
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => onPageChange(page + 1)}
            className={`p-2 border rounded mx-1 ${
              page + 1 === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border rounded ml-2"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  