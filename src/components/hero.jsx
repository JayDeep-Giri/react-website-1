import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1698254064280-8cf787405a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D'
            alt='/'
            className='w-full h-full object-cover' />
        <div className='max-v-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-v-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With TakeWeek</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi vitae
                    id est quidem aut similique tempora voluptatem iusto commodi pariatur,
                    aliquam debitis quae sequi soluta fugit repellendus eaque assumenda?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero;