# PlacementPro

PlacementPro is a centralized, premium-designed placement preparation platform built for engineering students to track their Data Structures & Algorithms (DSA) progress, monitor contest history, prepare company-wise, and schedule mock interviews.

---

## 🚀 Key Features

*   **💻 DSA Tracker**: Log and monitor your problem-solving progress by topic and difficulty across LeetCode, Codeforces, and more.
*   **🏆 Contest History**: Sync and visualize coding contest ratings and rankings from major platforms.
*   **🏢 Company Prep**: Curated problem sheets customized for top recruiting product-based companies.
*   **🎙️ Mock Interviews**: Schedule and log practice interviews with structured feedback reports.
*   **📊 Progress Analytics**: Visual dashboards and charts illustrating topic-wise readiness and growth.
*   **🔥 Daily Streaks**: Stay consistent with progress streak counters and customized daily goals.

---

## 🛠️ Technology Stack

*   **Frontend**: React (Vite-powered environment for lightning-fast HMR)
*   **Styling**: Tailwind CSS (version 3 for modern, custom utility-first designs)
*   **Routing**: React Router DOM (version 6 for declarative client-side navigation)
*   **Aesthetics**: Harmonious color palettes, premium gradients, card hover lift effects, and responsive mobile-first layouts

---

## 📂 Directory Structure

```text
placementpro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Responsive header with navigation links
│   │   ├── Hero.jsx      # Premium blue gradient hero section
│   │   ├── Card.jsx      # Reusable features display card with hover effects
│   │   └── Footer.jsx    # Centered dark copyright footer
│   ├── pages/
│   │   ├── Home.jsx      # Assembled landing page with features grid
│   │   ├── About.jsx     # Vision and platform description page
│   │   ├── Dashboard.jsx # Future personalized metrics tracker
│   │   └── Login.jsx     # Authentication entry point
│   ├── App.jsx           # Main client-side routing definitions
│   ├── main.jsx          # Root rendering entry wrapping the App in BrowserRouter
│   └── index.css         # Main stylesheet injecting Tailwind directives
├── tailwind.config.js    # Tailwind content and theme setup
├── postcss.config.js     # PostCSS configurations for Tailwind
└── package.json          # Dependency and script manager
```

---

## ⚡ Setup & Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Getting Started

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/anshhhgupta/placement-pro.git
    cd placement-pro
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Start the Local Development Server**:
    ```bash
    npm run dev
    ```
    Access the application at [http://localhost:5173/](http://localhost:5173/).

4.  **Build for Production**:
    ```bash
    npm run build
    ```
