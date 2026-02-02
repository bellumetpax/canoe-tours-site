# Canoe Tours Site

A marketing site for Canoe Tours built with Next.js (React 19), Tailwind CSS, and served via FastAPI.

## Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.9+

## Installation & Setup

### 1. Install Node.js dependencies

```powershell
npm install
```

### 2. Install Python dependencies

```powershell
pip install -r requirements.txt
```

## Running the Project

### Run Next.js development server

```powershell
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Use for development with hot reload.

### Build static output

```powershell
npm run build
```

Produces static files in the `out/` directory.

### Run FastAPI server (serves built static output)

First build the static output (see above), then:

```powershell
uvicorn app:app --host 127.0.0.1 --port 8000
```

Opens at [http://127.0.0.1:8000](http://127.0.0.1:8000). Serves the built Next.js site locally only.

## Project Structure

```
canoe-tours-site-local/
├── app/
│   ├── components/     # Nav, Footer
│   ├── tours/          # Tours page
│   ├── pricing/        # Pricing page
│   ├── about/          # About page
│   ├── contact/        # Contact page (mailto button)
│   ├── layout.tsx
│   ├── page.tsx        # Home
│   └── globals.css
├── app.py              # FastAPI server
├── requirements.txt
└── package.json
```

## Verification Checklist

Before considering the project complete, verify:

- [ ] `npm install` completes without errors
- [ ] `pip install -r requirements.txt` completes without errors
- [ ] `npm run dev` starts and opens at http://localhost:3000
- [ ] Home, Tours, Pricing, About, and Contact pages load in the dev server
- [ ] Navigation links work across all pages
- [ ] Footer appears on all pages
- [ ] Contact page "Contact me" button opens the default email client (mailto link)
- [ ] `npm run build` completes and creates an `out/` directory
- [ ] `uvicorn app:app --host 127.0.0.1 --port 8000` starts without errors
- [ ] Site loads at http://127.0.0.1:8000 when served by FastAPI
- [ ] All five pages load correctly when served by FastAPI
- [ ] Server is bound to 127.0.0.1 only (not 0.0.0.0)
