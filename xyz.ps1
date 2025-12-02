$sourceDir = "src/assets"
$targetWidth = 1920

# Check if directory exists
if (-not (Test-Path $sourceDir)) {
    Write-Host "Error: 'assets' directory not found." -ForegroundColor Red
    exit
}

# Get all PNG and JPG files
$images = Get-ChildItem -Path $sourceDir -Include *.png, *.jpg, *.jpeg -Recurse

if ($images.Count -eq 0) {
    Write-Host "No images found to optimize." -ForegroundColor Yellow
    exit
}

foreach ($image in $images) {
    $inputPath = $image.FullName
    $baseName = $image.BaseName
    $webpOutput = Join-Path $sourceDir "$baseName.webp"

    Write-Host "Optimizing: $($image.Name) -> WebP (Max Width: $targetWidth px)" -ForegroundColor Cyan

    # FFmpeg Logic:
    # -c:v libwebp : Use WebP encoder
    # -q:v 80      : Quality 80 (Good balance for Hero images)
    # -vf ...      : Resize to 1920px width, keep aspect ratio (-1). 
    #                'min(1920,iw)' ensures we do not upscale small images.
    $ffmpegArgs = @(
        "-i", "$inputPath",
        "-c:v", "libwebp",
        "-q:v", "80",
        "-vf", "scale='min($targetWidth,iw)':-1",
        "-y", "$webpOutput"
    )

    Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -NoNewWindow -Wait
}

Write-Host "Optimization complete." -ForegroundColor Green