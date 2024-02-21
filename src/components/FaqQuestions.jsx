'use client';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from '@material-tailwind/react';
import { Fragment } from 'react';
import React from 'react'

function AccordionAlwaysOpen({ FAQCardData }) {
    const [open, setOpen] = React.useState({ group: null, index: null });

    const handleOpen = (index) => {
        setOpen((prevOpen) =>
            prevOpen.index === index
                ? { index: null }
                : { index },
        );
    };

    return (
        <Fragment>
            <div className="py-5 px-5 md:px-0">
                <h2 className='text-center md:text-5xl text-3xl my-10 font-extrabold'> Shab - e - Barat manane ka sahih tareeka Quran or Sunnat ki roshni me !</h2>
                <div className="grid grid-cols-1 place-content-center md:p-0 py-5  md:px-20">
                    <div className="col-span-1 md:col-span-6">
                        {FAQCardData.length > 0 && FAQCardData.map((item, index) => (
                            <div key={index} className="mb-4 md:mb-8 "> {/* Adjust the margin-bottom for spacing */}
                                <Accordion
                                    open={open.index === index}
                                    className="md:mb-12 "
                                >
                                    <AccordionHeader
                                        onClick={() => handleOpen(index)}
                                        className="capitalize bg-blue-100 text-center bg-opacity-50 flex flex-col items-center gap-1 px-3 md:px-4 rounded-md">
                                        <p className="text-[#2e2d2d]">
                                            {item.title}
                                            <i className="ri-arrow-down-s-line px-3 text-2xl"></i>
                                        </p>
                                    </AccordionHeader>


                                    <AccordionBody>

                                        <p className="text-sm font-medium text-[#2e2d2d] p-3 rounded-lg capitalize bg-blue-gray-50 text-center " dangerouslySetInnerHTML={{ __html: item.body }} />
                                    </AccordionBody>

                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default AccordionAlwaysOpen;

