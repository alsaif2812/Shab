import data from '@/textContent/faq/roman.json'
import FaqQuestions from '@/components/FaqQuestions'
import Head from 'next/head';
export const metadata = {
    title: 'Shab-e-Barat ',
    icon: './favicon.ico'
};
export default function Home() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href={metadata.icon} />

            </Head>
            <FaqQuestions FAQCardData={data} />
        </>
    );
}
