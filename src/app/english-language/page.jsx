import FaqQuestions from '@/components/FaqQuestions';
import data from '@/textContent/faq/english.json'

const page = () => {
          return (
                    <>
                              <FaqQuestions FAQCardData={data} />
                    </>
          );
};

export default page;
