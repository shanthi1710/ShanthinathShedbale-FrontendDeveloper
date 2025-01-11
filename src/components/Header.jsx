import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div>
          <img src={LOGO_URL} alt="BrainStromFood Logo" className="w-3/12" />
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md flex items-center">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="flex-grow p-2 m-2 pl-4 border border-black rounded-lg"
          />
          <button
            type="button"
            className="p-2 bg-blue-500 text-white border rounded-lg border-black hover:border-blue-700 hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
