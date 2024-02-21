import Link from 'next/link'
import React from 'react'

const Navbar = () => {
          return (
                    <>
                              <div className='flex items-center justify-center gap-10 p-10 font-bold text-2xl bg-blue-300 text-[#3e3e3e] bg-opacity-40'>
                                        <Link href={'/english-language'} className='list-none'>English</Link>
                                        <Link href={'/hindi-language'} className='list-none'>Hindi</Link>
                                        <Link href={'/roman-language'} className='list-none'>Hinglish</Link>
                              </div>
                    </>
          )
}

export default Navbar