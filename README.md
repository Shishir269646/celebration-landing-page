# Celebration Landing Page

Welcome to the Celebration Landing Page project! This is a modern, responsive, and feature-rich landing page designed for celebrating special events, such as weddings, anniversaries, or any significant occasion. It's built with Next.js, React, Tailwind CSS, and DaisyUI, providing a beautiful and interactive user experience.

## Features

*   **Responsive Design:** Optimized for seamless viewing across various devices, from mobile phones to large desktop screens.
*   **Hero Section:** An engaging introduction with a background image and call-to-action.
*   **Dynamic Image Cards:** "Capture" section showcasing different aspects of the celebration, with some cards featuring AI-assisted elements.
*   **Free Access Banner:** Promotes exclusive free access with interactive floating decorative elements.
*   **Celebration Section:** Highlights key aspects of the event with QR code integration for easy access to event details.
*   **Interactive FAQ Section:** An accordion-style FAQ to quickly answer common questions about the event.
*   **Newsletter Subscription:** A dedicated section for users to sign up for updates.
*   **Comprehensive Footer:** Includes social media links, navigation, and copyright information.
*   **Accessibility Enhancements:** Improved accessibility for screen readers in key interactive components like the FAQ.
*   **Optimized Images:** Utilizes `next/image` for efficient image loading and performance.
*   **Centralized Styling:** All custom colors and shadows are managed through `tailwind.config.mjs` for easy theming and maintainability.

## Tech Stack

*   **Framework:** Next.js
*   **Library:** React
*   **Styling:** Tailwind CSS, DaisyUI
*   **Language:** JavaScript (ESNext)

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd celebration-landing-page
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    To start the production server after building:
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

Navigate through the landing page to explore its various sections. The interactive elements, such as the navigation bar, image cards, and FAQ accordion, are designed for a smooth user experience.

## Project Structure

The project follows a standard Next.js application structure:

```
.
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── app/               # Root layout and pages for Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout component
│   │   └── page.js        # Main page component
│   └── components/        # Reusable React components
│       ├── Banner.jsx
│       ├── Capture.jsx
│       ├── CelebrationSection.jsx
│       ├── Faq.jsx
│       ├── FeatureCard.jsx    # Extracted reusable component
│       ├── Footer.jsx
│       ├── FreeAccessBanner.jsx
│       ├── GuestsMind.jsx
│       ├── Navbar.jsx
│       ├── Qrcodecard.jsx
│       └── UnionCard.jsx
├── tailwind.config.mjs    # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## Screenshots

I am an AI and cannot directly generate or display screenshots. You provided a local path: `.\screenshort.png`.

To include this screenshot (or others) in the README:

1.  **Upload your screenshot(s)** to a public image hosting service (e.g., GitHub's image hosting for issues/PRs, Imgur, etc.).
2.  **Replace this section** with your actual screenshots, using Markdown image syntax:
    ```markdown
    ![Alt text for your screenshot](<URL_to_your_hosted_image>)
    ```
    For example:
    ```markdown
    ![Celebration Landing Page Desktop View](.\screenshort.png)
    
    ```
    

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
