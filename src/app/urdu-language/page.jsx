import FaqQuestions from '@/components/FaqQuestions';
import data from '@/textContent/faq/urdu.json'

const page = () => {
          return (
                    <>
                              <FaqQuestions FAQCardData={data} />
                    </>
          );
};

export default page;
