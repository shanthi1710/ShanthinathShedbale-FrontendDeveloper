# FoodMenu App

FoodMenu App is a simple React-based application designed to display and manage food menus. This project uses Vite for development and bundling and integrates Tailwind CSS for styling.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- React-based UI for a food menu application.
- Tailwind CSS for responsive and modern styling.
- Dynamic menu filtering and sorting:
  - **Filtering**: Filter menu items by area type (e.g., Indian, Chinese, American).
    - Default filter: Indian menu.
  - **Sorting**: Sort menu items by name in ascending (A-Z) or descending (Z-A) order.
    - Default sorting: Name (A-Z).
- Modal-based meal details view.
- Pagination for better navigation of menu items.

## Tech Stack
- **Frontend**: React 18.x
- **Styling**: Tailwind CSS
- **Development Tools**: Vite, ESLint
- **API**: TheMealDB API for fetching meal data.

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shanthi1710/ShanthinathShedbale-FrontendDeveloper
   cd foodmenu-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Build for Production
Build the application for production:
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Folder Structure
The basic folder structure is as follows:
```
foodmenu-app/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx      # Header component
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Body.jsx        # Main body component
│   │   ├── Modal.jsx       # Modal for meal details
│   │   ├── FilterSort.jsx  # Component for filtering and sorting
│   │   ├── FoodGrid.jsx    # Grid layout for food items
│   │   ├── Pagination.jsx  # Pagination component
│   │   ├── MealDetails.jsx # Details section for Modal
│   │   └── MealImage.jsx   # Image section for Modal
│   ├── utils/           # Utility functions and constants
│   │   ├── api.js          # API calls to fetch meal data
│   │   └── constants.js    # Static constants (URLs, etc.)
│   ├── styles/          # Tailwind CSS or other global styles
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point for React
├── public/              # Static assets
├── package.json         # Project metadata and scripts
└── vite.config.js       # Vite configuration file
```

## Components Overview

### Header
Renders the top navigation bar with the logo and a search bar.

### Footer
Displays the footer with the logo and copyright notice.

### Body
Handles filtering, sorting, pagination, and modal display for food items.
```javascript
// Includes hooks for state management and effects.
// Integrates with API functions to fetch menu data.
```

### Modal
Displays detailed information about a selected meal in a modal popup.
```javascript
// Uses meal details fetched from the API.
// Includes close functionality and responsive design.
```

## Contributing
Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---
