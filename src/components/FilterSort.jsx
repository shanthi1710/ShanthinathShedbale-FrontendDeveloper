const FilterSort = ({ filter, sort, onFilterChange, onSortChange }) => {
    return (
      <div className="flex gap-4 mb-6">
        <div>
          <label htmlFor="filter" className="block">Filter By:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="Japanese">Japanese</option>
            <option value="Thai">Thai</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="block">Sort By:</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="a-z">Name: A to Z</option>
            <option value="z-a">Name: Z to A</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default FilterSort;
  