import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import Title from './Title'

const Hero = () => {

  return (
    <div className="bg-[#181818] pt-16 pb-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        <div className="flex justify-center mb-8">
          <CheckCircle2 className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
        </div>
        <Title heading={'Your Daily Todo Companion'} />
        <div className="bg-[#323232] rounded-xl p-8 border border-gray-700">
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-200 italic leading-relaxed">
            "The secret of getting ahead is getting started. Write it down, make it happen."
          </blockquote>
        </div>
        <p className="text-lg text-gray-400 mt-10">
          Start organizing your tasks today.
        </p>
      </div>
    </div>
  )
}

export default Hero