'use client';
import React from 'react';
import Head from 'next/head';
import './globals.css';
import 'remixicon/fonts/remixicon.css';
import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';

const nunitoResult = Nunito({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${nunitoResult.className} select-none`}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="SHab-e-Barat" />

                <title>SHab-e-Barat</title>
            </Head>
            <body>
                <div>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
