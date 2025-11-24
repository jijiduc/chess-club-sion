#--------------------------------------------------------------------------
# 1. CONFIGURATION FTP
#--------------------------------------------------------------------------
$ftpServer = "mp4vc.ftp.infomaniak.com" 
$ftpUsername = "mp4vc_jijiduc"          
$remotePath = "/"                       
$localPath = "..\chess-club-deployment"     
$winscpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"

#--------------------------------------------------------------------------
# 2. NETTOYAGE
#--------------------------------------------------------------------------
Write-Output "Nettoyage de l'ancien déploiement..."
Remove-Item -Path $localPath -Recurse -Force -ErrorAction SilentlyContinue

#--------------------------------------------------------------------------
# 3. CONSTRUCTION
#--------------------------------------------------------------------------
Write-Output "Construction de l'application (npm run build)..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "La construction de l'application a échoué. Arrêt du script."
    exit 1
}

#--------------------------------------------------------------------------
# 4. PRÉPARATION
#--------------------------------------------------------------------------
Write-Output "Création du dossier de déploiement..."
New-Item -ItemType Directory -Force -Path $localPath

Write-Output "Copie des fichiers construits (dist)..."
Copy-Item -Recurse "dist\*" $localPath

#--------------------------------------------------------------------------
# 5. TÉLÉVERSEMENT FTP AVEC WINSCP
#--------------------------------------------------------------------------
Write-Output "Début du téléversement FTP avec WinSCP..."

if (-not (Test-Path $winscpPath)) {
    Write-Error "WinSCP.com non trouvé. Veuillez l'installer ou corriger le chemin."
    exit 1
}

try {
    $securePassword = Get-Content "ftp_password.sec" | ConvertTo-SecureString
} catch {
    Write-Error "Le fichier de mot de passe 'ftp_password.sec' est introuvable. Veuillez le créer."
    exit 1
}

# Crée un nom de fichier temporaire pour le script WinSCP
$tempScriptFile = [System.IO.Path]::GetTempFileName()

# Convertit le chemin local en chemin absolu pour éviter les erreurs
$absoluteLocalPath = (Resolve-Path -Path $localPath).Path
$password = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))

try {
    # Prépare le contenu du script qui sera exécuté par WinSCP
    $scriptContent = @"
option batch abort
option confirm off
open ftp://$($ftpUsername):"$($password)"@$($ftpServer)/ -timeout=15
synchronize remote -criteria=time "$($absoluteLocalPath)" "$($remotePath)"
exit
"@
    
    # Écrit les commandes dans le fichier de script temporaire
    Set-Content -Path $tempScriptFile -Value $scriptContent

    # Exécute WinSCP en utilisant le fichier de script
    & $winscpPath /log="winscp.log" /ini=nul /script="$($tempScriptFile)"

    if ($LASTEXITCODE -ne 0) {
        throw "WinSCP a rencontré une erreur lors du téléversement."
    }

    Write-Host -ForegroundColor Green "Succès ! Le site a été mis à jour sur le serveur."

} catch {
    Write-Error "Une erreur est survenue durant le téléversement FTP. Consultez le fichier 'winscp.log' pour plus de détails."
    exit 1
} finally {
    # Nettoie le mot de passe de la mémoire
    [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))
    # Supprime le fichier de script temporaire
    if (Test-Path $tempScriptFile) {
        Remove-Item $tempScriptFile -Force
    }
}

Write-Output "Script terminé."