'use client';
import './globals.css';
import 'remixicon/fonts/remixicon.css'
import { Nunito } from 'next/font/google';
import Navbar  from '@/components/Navbar';

const nunitoResult = Nunito({
    subsets: ['latin'],
    display: 'swap',
});


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${nunitoResult.className} select-none`}>
            <body >
                <div>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html >
    );
}
