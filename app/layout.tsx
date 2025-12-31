import "./globals.css";

export const metadata = {
  title: "Nicolás Angerossa | Portfolio",
  description: "Desarrollador web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-black text-white">
        <div className="fixed inset-0 w-full h-full z-10"><video autoPlay loop muted className=
        "w-full h-full object-cover object-center">
            <source src="Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        {children} 
      </body>
    </html>
  );
}
