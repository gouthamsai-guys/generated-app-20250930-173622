# Infinia - A Modern Animated Portfolio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/gouthamsai-guys/generated-app-20250930-173622)

Infinia is a visually breathtaking, minimalist single-page portfolio website designed to showcase a professional's work with elegance and flair. Built with a 'less is more' philosophy, it utilizes generous white space, a refined color palette, and crisp typography to ensure content is the star. The user experience is elevated through a suite of complex, fluid animations powered by Framer Motion. Every interaction, from scrolling to hovering, is designed to be delightful and engaging.

The portfolio is structured into distinct, full-bleed sections: a captivating Hero, an intimate About section, a dynamic Projects grid, a visually rich Skills display, and a clean Contact area. The entire experience is seamless, performant, and flawlessly responsive.

## Key Features

-   **Minimalist Single-Page Design:** A clean, focused layout that puts your content front and center.
-   **Complex Fluid Animations:** Powered by Framer Motion for a smooth, engaging, and modern user experience.
-   **Distinct Content Sections:** Includes Hero, About, Projects, Skills, and Contact sections, each with unique entrance animations.
-   **Glassmorphism Header:** A beautiful, sticky header that provides seamless navigation.
-   **Fully Responsive:** Flawless layouts across all device sizes, from mobile phones to ultra-wide desktops.
-   **Performance-Optimized:** Built with a static data approach for maximum speed and simplicity.
-   **Easy Customization:** All portfolio content is managed in a single, easy-to-edit TypeScript file.

## Technology Stack

-   **Framework:** React (with Vite)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Git](https://git-scm.com/) for cloning the repository.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/infinia_portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd infinia_portfolio
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun dev
```

This will start the Vite development server, typically available at `http://localhost:3000`. The server supports Hot Module Replacement (HMR) for a fast and efficient development workflow.

## Customization

All personal information, project details, skills, and links are stored in a centralized TypeScript file:

`src/data/portfolioData.ts`

To customize the portfolio with your own content, simply edit the data within this file. The changes will be reflected across the application automatically.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploying with Wrangler CLI

1.  **Login to Wrangler:**
    If you haven't already, authenticate the Wrangler CLI with your Cloudflare account.
    ```sh
    bunx wrangler login
    ```
2.  **Run the deploy script:**
    The project includes a convenient script to build and deploy your application.
    ```sh
    bun run deploy
    ```
    This command will build the application and deploy it to Cloudflare Pages.

### Deploy with the Deploy Button

Alternatively, you can deploy this repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/gouthamsai-guys/generated-app-20250930-173622)

## Available Scripts

-   `bun dev`: Starts the development server.
-   `bun build`: Creates a production-ready build of the application.
-   `bun deploy`: Builds and deploys the application to Cloudflare.
-   `bun lint`: Runs the ESLint checker to find and fix problems in the code.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.