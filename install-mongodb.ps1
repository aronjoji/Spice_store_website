# Create the download directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "$env:TEMP\mongodb-install"

# Download MongoDB
$mongoUrl = "https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.5-signed.msi"
$installerPath = "$env:TEMP\mongodb-install\mongodb-installer.msi"
Invoke-WebRequest -Uri $mongoUrl -OutFile $installerPath

# Install MongoDB
Start-Process msiexec.exe -ArgumentList "/i `"$installerPath`" /quiet /qn /norestart ADDLOCAL=`"ServerService,Router,Client,Shell,MonitoringTools,ImportExportTools,MiscellaneousTools`"" -Wait

# Create data directory
New-Item -ItemType Directory -Force -Path "C:\data\db"

Write-Host "MongoDB installation completed. Please restart your computer to complete the setup."
