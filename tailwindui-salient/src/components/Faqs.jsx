import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can Salamat create my NFT?',
      answer:
        'Yes, please sign up for more details.',
    },
    {
      question: 'Can I use non-custodial wallets on my platform?',
      answer: 'Yes.',
    },
    {
      question: 'Can I customize my own branded NFT marketplace on my website on Ethereum blockchain?',
      answer:
        'Yes.',
    },
  ],
  [
    {
      question: 'What cross-chain capabilities are available with Salamat??',
      answer:
        'Email us for more details.',
    },
    {
      question:
        'How does the productivity tool work?',
      answer:
        'We allow creators from many backgrounds, from 2D and 3D visual artists, musicians, writers and more to track their work for efficiently through exchanging information with unified UI connecting all stages of the production pipeline.',
    },
    {
      question:
        'I found other companies called working with Hollywood Studios and NFTs, how are you different?',
      answer:
        'Most creative professionals do not have enterprise software in an end-to-end pipeline, nor are they decentralized, or have background or expertise in major Hollywood film production or web3 (anyone in the last 2 years working on NFTs is relatively new. Our all-star team has seasoned experience working in both in the technology and entertainment industry.',
    },
  ],
  [
    {
      question: 'How are you putting budgets on-chain?',
      answer:
        'Using FileCoin, IPFS and other DeFi prototols, we are sharing data from our accounting software for producers on the Ethereum blockchain.',
    },
    {
      question: 'Why would you put budgets on chain?',
      answer: 'Hollywood has been a Black Box and not transparent for years. Web3 unlocks the capability to be clear with the fan base of our artists how their content is created, what and where it is funding..',
    },
    {
      question: 'How can I get a trial version of this software platform?',
      answer:
        'Sign up for our Substack newsletter and we will update folks outside of our existing customers when we release a new version of our software.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
