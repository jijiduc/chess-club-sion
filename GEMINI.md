# Project Context: Club d'Échecs de Sion

## Project Overview
This project is the official website for the **Club d'Échecs de Sion** (Sion Chess Club). It is a hybrid repository containing:
1.  A modern **Single Page Application (SPA)** built with React and Vite.
2.  **Python automation scripts** for scraping player ratings (FIDE) and tournament results (FSE).
3.  Deployment scripts for FTP synchronization.

## Core Components

### 1. Web Application (`chess-club-sion-v2/`)
*   **Type:** Frontend SPA
*   **Framework:** React 18 + TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **State Management:** Zustand
*   **Routing:** React Router v6
*   **Key Dependencies:** `framer-motion` (animations), `lucide-react` (icons), `react-head` (SEO/Meta tags), `date-fns` (date formatting).

### 2. FIDE Data Scraper (`web-scrapper-fide/`)
*   **Purpose:** Fetches current ELO ratings (Standard, Rapid, Blitz) for club members from the FIDE website.
*   **Key Script:** `elo_scrapper.py`
*   **Input:** `fide_ids.csv` (List of member FIDE IDs).
*   **Output:** `fide_elo.csv` (Updated ratings).
*   **Logic:** Iterates through IDs, scrapes `ratings.fide.com` profiles using `requests` and `BeautifulSoup`.

### 3. FSE League Scraper (`web-scrapper-FSE-ligue/`)
*   **Purpose:** Scrapes team results and standings from the Swiss Chess Federation (FSE/SSB) website.
*   **Key Script:** `scrape_all_rounds.py`
*   **Output:** `cse_data_2025/` (JSON and CSV files for each round).
*   **Logic:** targets specific team URLs configured in the script and extracts match details.

## Development Workflow

### Prerequisites
*   **Node.js** (for the web app)
*   **Python 3** (for data scrapers)
*   **WinSCP** (for Windows deployment)

### Web Application
1.  Navigate to the directory: `cd chess-club-sion-v2`
2.  Install dependencies: `npm install`
3.  Start dev server: `npm run dev`
4.  Build for production: `npm run build`
5.  Lint code: `npm run lint`

### Running Scrapers
**FIDE Ratings:**
```bash
python web-scrapper-fide/elo_scrapper.py
```
*Note: Ensure `fide_ids.csv` is up to date.*

**FSE Results:**
```bash
python web-scrapper-FSE-ligue/scrape_all_rounds.py
```

### Deployment (Windows)
The project uses a PowerShell script to build the React app and upload the `dist/` folder via WinSCP.
*   **Script:** `chess-club-sion-v2/deploy.ps1`
*   **Credentials:** Requires `ftp_password.sec` (secure string file) in the `chess-club-sion-v2` directory.
*   **Command:** `.\deploy.ps1`

## Key File Locations

| Path | Description |
| :--- | :--- |
| `chess-club-sion-v2/src/main.tsx` | Entry point for the React application. |
| `chess-club-sion-v2/src/App.tsx` | Main component and routing definitions. |
| `chess-club-sion-v2/src/components/navigation/TableOfContents.tsx` | **NEW**: Dynamic side navigation component with ScrollSpy. |
| `chess-club-sion-v2/src/features/competitions/CVE.tsx` | CVE Competition page (updated with ToC & 2026 content). |
| `chess-club-sion-v2/src/features/competitions/CSE.tsx` | CSE Competition page (updated with ToC). |
| `chess-club-sion-v2/src/pages/Histoire.tsx` | History page (updated with ToC). |
| `chess-club-sion-v2/src/pages/ChessSchool.tsx` | Chess School page (updated with ToC). |
| `chess-club-sion-v2/src/pages/Club.tsx` | Club page (updated with ToC). |
| `chess-club-sion-v2/deploy.ps1` | Windows deployment script (Build + FTP). |
| `web-scrapper-fide/elo_scrapper.py` | Main script for updating FIDE ratings. |
| `web-scrapper-FSE-ligue/scrape_all_rounds.py` | Main script for updating league results. |
| `web-scrapper-FSE-ligue/cse_data_2025/` | Generated data folder for league results. |

## Recent Updates (January 2026)
*   **Navigation:** Added a dynamic `TableOfContents` component for long pages (`CVE`, `CSE`, `Histoire`, `ChessSchool`, `Club`).
*   **CVE:** Updated content for the 2026 season (Phase 2, Groups G/H) and team compositions.
*   **CSE:** Added 2026 season schedule and removed old group references.
