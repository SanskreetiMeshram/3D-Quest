# Start Chrome in background
$chromeProc = Start-Process -FilePath "C:\Program Files\Google\Chrome\Application\chrome.exe" -ArgumentList "--headless=new --remote-debugging-port=9222 --disable-gpu --user-data-dir=$env:TEMP\chrome_e2e_profile http://localhost:5173/Geometry-Quest-3D/" -PassThru
Start-Sleep -Seconds 2

# Run node test
node run_browser_test.js

# Clean up Chrome
Stop-Process -Id $chromeProc.Id -Force -ErrorAction SilentlyContinue
