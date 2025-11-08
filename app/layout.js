export const metadata = {
  title: 'Door Camera - Dog Eating Burger',
  description: 'Door camera footage of a dog eating a burger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
