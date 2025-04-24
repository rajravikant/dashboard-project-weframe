# Dashboard

Modern dashboard built using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It features a clean design, dynamic components, and reusable utilities to create a seamless user experience.

## Features

- **Responsive Design**: Fully responsive layout that adapts to different screen sizes.
- **Dynamic Sidebar**: A collapsible sidebar with navigation links.
- **Search Functionality UI**: A search bar to filter content.
- **Filter Options UI**: Dynamic filters to categorize and sort content.
- **Story Cards**: Interactive cards displaying story details with animations.

## Project Structure

The project is organized as follows:

```
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
app/
  globals.css
  layout.tsx
  loading.tsx
  page.tsx
assets/
  icons/
  img/
components/
  Filters.tsx
  Header.tsx
  SearchBar.tsx
  SideBarItem.tsx
  SideDrawerBar.tsx
  StoryCard.tsx
constant/
  cardData.ts
  images.ts
lib/
  utils.ts
styles/
  globals.css
```

### Key Directories

- **`app/`**: Contains the main application files, including layout, global styles, and pages.
- **`components/`**: Reusable React components such as the sidebar, header, and story cards.
- **`constant/`**: Static data and constants used across the application.
- **`lib/`**: Utility functions for common operations.
- **`styles/`**: Global and utility styles for the project.
- **`assets/`**: Icons and images used in the application.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed programming language for JavaScript.
- **Lucide Icons**: Icon library for modern UI design.

## Customization

### Tailwind Configuration

The Tailwind CSS configuration is located in `tailwind.config.ts`. You can customize themes, colors, and plugins as needed.

### Story Cards

Story data is managed in `constant/cardData.ts`. You can add, remove, or modify story details here.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)