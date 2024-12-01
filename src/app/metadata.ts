import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'ProFlow',
    template: '%s | ProFlow'
  },
  description: 'Project Management System for Software Developers',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any'
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml'
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' }
  ]
}
