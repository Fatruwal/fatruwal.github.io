import React from "react"

type Content = {
  title: string
  description: string
  icon: {
    altText: string
    publicUrl: string
  }
}

export interface WhoWeAreProps {
  content: {
    firstColumn: Content
    secondColumn: Content
    thirdColumn: Content
  }
}

export default function WhoWeAre({ content }: WhoWeAreProps) {
  return (
    <div className="my-8 w-full sm:w-10/12 xl:max-w-screen-2xl">
      <div className="grid grid-cols-1 px-4 sm:px-8 lg:grid-cols-3 lg:gap-20">
        <Column content={content.firstColumn} />
        <Column content={content.secondColumn} />
        <Column content={content.thirdColumn} />
      </div>
    </div>
  )
}

const Column = ({ content }: { content: Content }) => {
  return (
    <div className="flex flex-col items-center p-4 px-0 sm:px-8">
      <div className="flex h-20 w-20 items-center justify-center">
        <img src={content.icon.publicUrl} alt={content.icon.altText} />
      </div>
      <h2 className="my-4 text-center text-xl font-bold text-primary-500">
        {content.title}
      </h2>
      <p className="text-md text-center">{content.description}</p>
    </div>
  )
}
