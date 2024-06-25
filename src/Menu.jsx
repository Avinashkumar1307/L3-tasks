import React from 'react'
import chat from './assets/Chat.svg';
export default function Menu() {
    return (
        <>
            <div className='w-[250px] h-[72px] flex items-center justify-end space-x-3 z-10'>
                <div className='h-[24px] flex items-center text-[16px]'>
                    1 New
                </div>
                <div className='flex h-[24px] items-center space-x-2'>
                    <div>
                        <img src={chat} alt='Chat' className='w-[24px] h-[24px]' />
                    </div>
                    <div className='text-[16px]'>Chat</div>
                </div>

            </div>
        </>
    )
}
