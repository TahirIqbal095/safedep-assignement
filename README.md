# Open Source Package Analysis Dashboard

A comprehensive dashboard for analyzing open-source software packages. This application provides deep insights into package vulnerabilities, licensing, maintenance scores, and malware analysis by leveraging the SafeDep API.

## 🚀 Features

- **Package Insights**: View detailed security scores, vulnerability reports, and licensing information.
- **Modern UI/UX**: Built with Next.js 16, Tailwind CSS, Motion and Shadcn UI for a responsive and accessible experience.
- **Server Actions**: Utilizes Next.js Server Actions for secure and efficient API data fetching.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Source**: SafeDep API

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your SafeDep credentials:

   ```env
   SAFEDEP_API_KEY=your_api_key_here
   SAFEDEP_TENANT_ID=your_tenant_id_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

- **`actions/`**: Server actions for fetching data from SafeDep APIs (`InsightService` and `MalwareAnalysisService`).
- **`app/`**: Next.js App Router structure, including the dynamic package details page `p/[ecosystem]/[name]/[version]`.
- **`components/`**: Reusable UI components (StatCards, PackageSummary, InsightPanels, etc.).
- **`config/`**: Configuration files for static data and types.
- **`types/`**: Centralized TypeScript definitions for API responses and component props.
- **`utils/`**: Helper functions for data sanitization and transformation.
