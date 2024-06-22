import React from 'react';
import Menu from './Menu';
export default function Header() {
    return (
        <>
            <div className='w-full h-[102px]'>
                <div className='w-full h-[72px] flex justify-center items-center text-[#ffffff]'>
                    <div className='w-[1050px] h-[72px] flex justify-between'>
                        <Menu />
                        <Menu />

                    </div>

                </div>
            </div>
        </>
    )
}
