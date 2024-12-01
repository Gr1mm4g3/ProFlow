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
- Light and dark mode support using next-themes
- Catppuccin Latte theme for light mode
- Dracula theme for dark mode
- Theme toggle button in navigation bar
- System theme detection and synchronization
- Updated logo designs for both themes
- Theme-aware component styling
- Comprehensive theme documentation

### Changed
- Updated root layout with proper meta tags and icon references
- Improved navigation with icon indicators
- Switched from PostgreSQL to SQLite for development database
- Redesigned navigation bar to use a traditional solid style
- Updated color system to use CSS variables
- Improved component contrast and readability
- Enhanced documentation structure

### Fixed
- Resolved 404 errors for missing favicon and touch icons
- Fixed theme switching functionality
- Addressed hydration warnings in the layout
- Theme-related hydration mismatches
- Logo rendering inconsistencies
- Dark mode text contrast issues

## [0.1.0] - 2024-01-01

### Added
- Initial release
- Basic project management features
- Team collaboration tools
- User authentication
- Project dashboard
- Task management system
