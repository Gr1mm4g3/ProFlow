# Changelog

All notable changes to ProFlow will be documented in this file.

## [Unreleased]

### Added
- Theme toggle functionality with dark/light mode support using `next-themes`
- Responsive authenticated layout with sidebar navigation
- Icon integration using `lucide-react` for improved UI
- Comprehensive favicon and touch icon support
  - Added favicons in multiple sizes (16x16, 32x32)
  - Added Apple touch icon (180x180)
  - Added Android chrome icons (192x192, 512x512)
  - Added favicon generation script
- Web manifest for PWA support
- NextAuth.js integration for authentication
- Project management API endpoints
- SQLite database integration with Prisma

### Changed
- Updated root layout with proper meta tags and icon references
- Improved navigation with icon indicators
- Switched from PostgreSQL to SQLite for development database

### Fixed
- Resolved 404 errors for missing favicon and touch icons
- Fixed theme switching functionality
- Addressed hydration warnings in the layout
