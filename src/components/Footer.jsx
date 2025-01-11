import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-blue-400 shadow-md mt-8">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div>
          <img src={LOGO_URL} alt="BrainStormFood Logo" className="w-3/12" />
          <p>
            © {new Date().getFullYear()} BrainStormFood. All rights reserved.
            Designed with ❤️ for food lovers.
          </p>
        </div>

        {/* Footer Text */}
        <div className="text-gray-700 text-sm m-2">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
