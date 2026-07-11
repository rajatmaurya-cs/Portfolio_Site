import "../index.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Rajat Maurya| Portfolio",
  description: "Explore projects, skills, and experience of Rajat Maurya, a Computer Science student and web developer.",
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "Rajat Maurya| Portfolio",
    description: "Explore projects, skills, and experience of Rajat Maurya, a Computer Science student and web developer.",
    images: ["https://your-domain.com/preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Maurya| Portfolio",
    description: "Portfolio of Rajat Maurya projects, skills, and experience in software development.",
    images: ["https://your-domain.com/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon-2.png" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
