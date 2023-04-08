import Head from 'next/head'
import Image from 'next/image'
import Form from '@/components/Form'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Contract Reader</title>
        <meta name="description" content="smart contract code reader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>      
        <div className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <a href="#" className="flex items-center">
              <Image
                  className="hidden h-10 sm:block rounded-full mr-2"
                  src="/scanner.png"
                  alt="Smart Scanner logo"
                  width={40}
                  height={40}
              />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Smart Contract Reader</span>
            </a>
          </div>
        </div>

        <Form/>
        <Footer/>
      </main>
    </>
  )
}
