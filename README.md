# Sharif Properties - Real Estate Website

This is a modern, responsive, and SEO-optimized real estate website for "Sharif Properties". It's built using Next.js and the App Router, providing a fast and seamless user experience.

## Features

- **Static Site Generation (SSG):** The app is configured to be exported as a static website for optimal performance and hosting flexibility.
- **Responsive Design:** A mobile-first approach ensures the site looks great on all devices, from desktops to smartphones.
- **Property Listings:** Browse featured and all properties with detailed pages, including image carousels, descriptions, features, and agent information.
- **Advanced Filtering:** Users can filter properties by location, price range, number of bedrooms, and property type.
- **SEO Optimized:** Implemented a range of SEO strategies, including a dynamic sitemap, `robots.txt`, structured data (JSON-LD) for properties, and optimized meta tags for better search engine visibility.
- **Blog:** A dedicated blog section with in-depth articles to establish authority and attract organic traffic.
- **Contact Form:** A fully functional contact form using Next.js Server Actions.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative:** [Genkit](https://firebase.google.com/docs/genkit)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1.  Clone the repository to your local machine.
2.  Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

### Building the Static Site

This project is configured for static export. To build the site:

```bash
npm run build
```

The static files will be generated in the `out/` directory. These files can be deployed to any static hosting service.

### Genkit Flows

To run Genkit flows for AI functionality, use the following commands:

- **Start the Genkit development server:**
  ```bash
  npm run genkit:dev
  ```

- **Start Genkit with file watching:**
  ```bash
  npm run genkit:watch
  ```
