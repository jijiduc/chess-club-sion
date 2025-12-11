# FIDE Data Update Pipeline
# This script orchestrates the scraping of FIDE data and its injection into the website's source code.
# It assumes it is run from the project root directory.

$ErrorActionPreference = "Stop"
$scrapperDir = "web-scrapper-fide"
$pythonCmd = "python" 

Write-Host "----------------------------------------" -ForegroundColor Cyan
Write-Host "   FIDE Data Update Pipeline Started    " -ForegroundColor Cyan
Write-Host "----------------------------------------" -ForegroundColor Cyan

# Check if python is available
if (-not (Get-Command $pythonCmd -ErrorAction SilentlyContinue)) {
    Write-Error "Python not found in PATH. Please ensure Python is installed and available."
}

# 1. Scrapers
Write-Host "`n[1/7] Scraping ELO ratings (Standard, Rapid, Blitz)..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/elo_scrapper.py"
if ($LASTEXITCODE -ne 0) { Write-Error "elo_scrapper.py failed" }

Write-Host "`n[2/7] Scraping Player Statistics (Win/Draw/Loss)..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/stats_scrapper.py"
if ($LASTEXITCODE -ne 0) { Write-Error "stats_scrapper.py failed" }

Write-Host "`n[3/7] Scraping Player History (Last 12 months)..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/history_scrapper.py"
if ($LASTEXITCODE -ne 0) { Write-Error "history_scrapper.py failed" }

# 2. Injectors
Write-Host "`n[4/7] Updating members.ts with new ELO ratings..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/update_members_ts.py"
if ($LASTEXITCODE -ne 0) { Write-Error "update_members_ts.py failed" }

Write-Host "`n[5/7] Injecting Statistics into members.ts..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/inject_stats.py"
if ($LASTEXITCODE -ne 0) { Write-Error "inject_stats.py failed" }

Write-Host "`n[6/7] Injecting History into members.ts..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/inject_history.py"
if ($LASTEXITCODE -ne 0) { Write-Error "inject_history.py failed" }

# 3. Cleanup
Write-Host "`n[7/7] Final Cleanup of members.ts..." -ForegroundColor Yellow
& $pythonCmd "$scrapperDir/fix_members_mess.py"
if ($LASTEXITCODE -ne 0) { Write-Error "fix_members_mess.py failed" }


Write-Host "`n----------------------------------------" -ForegroundColor Green
Write-Host "   Pipeline Completed Successfully! ♟️   " -ForegroundColor Green
Write-Host "----------------------------------------" -ForegroundColor Green