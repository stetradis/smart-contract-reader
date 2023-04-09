import Head from 'next/head'
import Image from 'next/image'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const readContract = async (text: string) => {
    setLoading(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Explain what this smart contract code does in simple terms and identify any malicious code:\n\n ' + text + '',
        max_tokens: 250,
        temperature: 0.2
      })
    };

    const response = await fetch(process.env.NEXT_PUBLIC_OPENAI_API_URL!, options);

    const json = await response.json();
    const result = json.choices[0].text;
    setApiResponse(result);
    setLoading(false);
  }

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

        <Form readContract={readContract} apiResponse={apiResponse}/>
        <Footer/>
      </main>
    </>
  )
}
