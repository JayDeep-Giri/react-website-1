import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm;grid-col-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img
                     className='w-full h-full object-cover '
                     src='https://images.unsplash.com/photo-1674684417927-0008e103930f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NXxobWVudlFoVW14TXx8ZW58MHx8fHx8'
                     alt='/' />
            </div>
            <div>
                <img
                     className='w-full h-full object-cover '
                     src='https://images.unsplash.com/photo-1681625597273-a8888f25eddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4MHxobWVudlFoVW14TXx8ZW58MHx8fHx8'
                     alt='/' />
            </div>
            <div>
                <img
                     className='w-full h-full object-cover '
                     src='https://images.unsplash.com/photo-1696258361232-5cf43e06afa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3xobWVudlFoVW14TXx8ZW58MHx8fHx8'
                     alt='/' />
            </div>
            <div>
                <img
                     className='w-full h-full object-cover '
                     src='https://images.unsplash.com/photo-1562860434-3cced295cf94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1OXxobWVudlFoVW14TXx8ZW58MHx8fHx8'
                     alt='/' />
            </div>
            <div>
                <img
                     className='w-full h-full object-cover '
                     src='https://images.unsplash.com/photo-1680798790107-173a774f34ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2NnxobWVudlFoVW14TXx8ZW58MHx8fHx8'
                     alt='/' />
            </div>
        </div>
    </div>
    )
}

export default Gallery;