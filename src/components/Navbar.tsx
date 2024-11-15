import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import {LoginLink,RegisterLink,getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react';

const Navbar = () => {

    const user=true;
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-20 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>

        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>

                <Link className='flex z-40 font-semibold' href="/">
                <span>quill.</span>
                
                </Link>

                <div className='hidden items-center space-x-4 sm:flex'>
                   {
                    !user ? (
                        <>
                         <Link href={"/pricing"} className={buttonVariants({
                            variant:'ghost',
                            size:'sm'
                         })}>
                         Pricing
                         </Link>
                         <LoginLink className={buttonVariants({
                            variant:'ghost',
                            size:'sm'
                         })}>
                            Sign in
                         </LoginLink>
                         <RegisterLink className={buttonVariants({
                           
                            size:'sm'
                         })}>
                            Get Started <ArrowRight className='ml-1.5 h-5 w-5' />
                         </RegisterLink>

                        </>


                    ):(
                        <Link href={"/dashboard"} className={buttonVariants({
                            variant:"ghost",
                            size:"sm"
                        })}>
                            Dashboard
                        
                        </Link>
                    )
                   }

                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar