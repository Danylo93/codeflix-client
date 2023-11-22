// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
            src='/flash-5.jpg'
            alt='The Flash'
            fill= {true}
            className='h-[95vh] object-cover object-top lg:h-[95vh]'
          />
          </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              The Flash
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Embarque em uma jornada eletrizante com 'The Flash', onde a velocidade redefine a realidade. Barry Allen, o homem mais rápido do mundo, enfrenta desafios épicos, descobre segredos surpreendentes e forja seu destino. Prepare-se para a adrenalina e a emoção nesta incrível saga de super-heróis.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='
          md:text-xl;
          flex
          cursor-pointer
          items-center
          gap-x-2
          rounded
           bg-white
           px-5
           py-1.5
           text-sm
           font-semibold
          text-black
          transition
          hover:opacity-75
          md:px-8
          md:py-2.5
          '>
            Play
          </button>

          <button className='
          md:text-xl;
          flex
          cursor-pointer
          items-center
          gap-x-2
          rounded
           bg-gray-600
           px-5
           py-1.5
           text-sm
           font-semibold
          text-black
          transition
          hover:opacity-75
          md:px-8
          md:py-2.5
          '>
            More Info
          </button>
        </div>
      </main>
    </div>
  );
}
