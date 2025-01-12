import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={LOGO_URL}
            alt="BrainStromFood Logo"
            className="h-10 sm:h-12"
          />
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-auto flex flex-grow sm:flex-grow-0 max-w-md items-center">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="flex-grow p-2 pl-4 border border-black rounded-lg"
          />
          <button
            type="button"
            className="p-2 ml-2 bg-blue-500 text-white border rounded-lg border-black hover:border-blue-700 hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
