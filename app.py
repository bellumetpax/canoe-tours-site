"""
FastAPI server that serves the built Next.js static output.
Runs locally only on 127.0.0.1:8000.
"""
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Canoe Tours Site")

# Path to Next.js static export output
OUT_DIR = Path(__file__).parent / "out"

if OUT_DIR.exists():
    app.mount("/_next", StaticFiles(directory=OUT_DIR / "_next"), name="_next")

    @app.get("/")
    async def root():
        return FileResponse(OUT_DIR / "index.html")

    @app.get("/{path:path}")
    async def serve_spa(path: str):
        """Serve SPA routes. Next.js export uses index.html in each route folder."""
        full_path = OUT_DIR / path
        if full_path.is_file():
            return FileResponse(full_path)
        index_path = OUT_DIR / path / "index.html"
        if index_path.exists():
            return FileResponse(index_path)
        root_index = OUT_DIR / "index.html"
        if root_index.exists():
            return FileResponse(root_index)
        not_found = OUT_DIR / "404.html"
        if not_found.exists():
            return FileResponse(not_found, status_code=404)
        return JSONResponse({"detail": "Not found"}, status_code=404)
else:
    @app.get("/")
    async def root():
        return {
            "error": "Static files not found",
            "message": "Run 'npm run build' first to generate the static output in the 'out' directory.",
        }
