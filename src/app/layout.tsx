import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
    src: '../fonts/NanumSquareL.otf',
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={myFont.className}>
            <body className="bg-gray-50">{children}</body>
        </html>
    );
}
