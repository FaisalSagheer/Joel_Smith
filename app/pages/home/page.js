'use client'
import React from 'react'
import Hero from '@/app/components/Hero'
import LogoCloud from '@/app/components/LogoCloud'
import AboutBook from '@/app/components/AboutBook'
import { NewsLetter } from '@/app/components/NewsLetter'
import { AboutAuthor } from '@/app/components/AboutAuthor'
import Testimonials from '@/app/components/Testimonials'

function Home() {
  return (
    <>
     <Hero/>
     <AboutBook/> 
     <LogoCloud/>
     <AboutAuthor/>
     <Testimonials/>
     <NewsLetter/>
    </>
  )
}

export default Home
