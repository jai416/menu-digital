import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "El Cubano | Menú Digital",
  description: "La mejor cocina tradicional cubana en Miami",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white antialiased">{children}</body>
    </html>
  )
}