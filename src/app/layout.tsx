import './globals.css' // Make sure this path is correct

export const metadata = {
  title: 'My Shop',
  description: 'An e-commerce app built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
