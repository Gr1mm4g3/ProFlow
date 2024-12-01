#!/bin/bash

# Create the necessary directories
mkdir -p public

# Convert SVG to PNG for various sizes
convert public/icon.svg -resize 16x16 public/favicon-16x16.png
convert public/icon.svg -resize 32x32 public/favicon-32x32.png
convert public/icon.svg -resize 180x180 public/apple-touch-icon.png
convert public/icon.svg -resize 192x192 public/android-chrome-192x192.png
convert public/icon.svg -resize 512x512 public/android-chrome-512x512.png

# Create favicon.ico (multi-size icon)
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico
