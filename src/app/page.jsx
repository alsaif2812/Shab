import data from '@/textContent/faq/roman.json'
import FaqQuestions from '@/components/FaqQuestions'
export const metadata = {
    title: 'Shab-e-Barat '
};
export default function Home() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <FaqQuestions FAQCardData={data} />
        </>
    );
}
