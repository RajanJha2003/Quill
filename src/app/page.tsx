import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight} from 'lucide-react'

export default function Home() {
  return (

 <>
  <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
       <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50  '>
        <p className='text-sm font-semibold text-gray-700'>Quill is now public!</p>
    
    </div>
    <h1>Chat with your <span>documents</span> in seconds.</h1>
    <p>Quill allows you to have conversations with any PDF document.Simply upload your file and start asking questions right away.</p>

    <Link href={"/dashboard"}>
    Get started <ArrowRight />
    </Link>
  </MaxWidthWrapper>

  <div>
    <div>
      <div>
        <div>

        </div>
        <div>
          <div>
            <div>
              <div>
                <Image src={"/dashboard-preview.jpg"} alt='dashboard-preview' width={1364} height={866} quality={100} />
              </div></div>
          </div>
        </div>
        <div>
          <div>

          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Start chatting in minutes</h2>
            <p>Chatting to your PDF files has never been easier than with Quill.</p>
          </div>
        </div>
        <ol>
          <li>
            <div>
              <span>Step 1</span>
              <span>Sign up for an account</span>
              <span>Wither starting out with a free plan or choose our <Link href={"/pricing"}>
                pro plan              </Link></span>
            </div>
          </li>
          <li>
            <div>
            <span>
              Step2
            </span>
            <span>Upload your PDF file </span>
            <span>
              We&apos;ll process your file and make it ready for you to chat with.
            </span>
            </div>
          </li>
          <li>
            <div>
              <span>Step 3</span>
              <span>Start asking questions</span>
              <span>
                It&apos;s that simple.Try out Quill today - it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>
        <div>
          <div>
            <div>
              <Image src={"/file-upload-preview.jpg"} alt='uploading preview' width={1419} height={732} quality={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </>
  
  )
}
