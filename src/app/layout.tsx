import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
    src: '../fonts/NanumSquareL.otf'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={myFont.className}>
            <body>{children}</body>
        </html>
    );
}
