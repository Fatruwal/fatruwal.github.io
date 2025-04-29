import React from "react"

export interface QualityProps {
  content: {
    certificate?: {
      header?: string
      image?: {
        altText: string
        publicUrl: string
      }
    }
    guarantee?: {
      header?: string
      image?: {
        altText: string
        publicUrl: string
      }
    }
    download?: {
      text?: string
      file?: string
    }
  }
}

export default function Quality({ content }: QualityProps) {
  return (
    <div className="w-full sm:w-10/12 xl:max-w-screen-2xl">
      <div className="flex flex-col gap-4 rounded-sm p-4 px-8 sm:px-4 md:flex-row md:items-center md:justify-between lg:gap-20">
        <div className="">
          <h2 className="my-4 text-lg font-bold">
            {content.certificate?.header}
          </h2>
          {content.certificate?.image && (
            <img
              className="h-96 min-h-20 md:h-auto md:min-h-96 lg:min-h-96"
              src={content.certificate?.image.publicUrl}
              alt={content.certificate?.image.altText}
            />
          )}
        </div>
        <div className="">
          <h2 className="my-4 text-lg font-bold">
            {content.guarantee?.header}
          </h2>
          {content.guarantee?.image && (
            <img
              className="min-h-20 md:min-h-96 lg:min-h-96"
              src={content.guarantee?.image.publicUrl}
              alt={content.guarantee?.image.altText}
            />
          )}
        </div>
      </div>
      {content.download && (
        <div className="mb-8 mt-2 w-full px-8 sm:px-4">
          <a
            href={content.download?.file}
            className="rounded-sm bg-primary-500 p-2 px-6 text-center text-xs font-bold text-white hover:bg-primary-600"
            target="_blank"
          >
            Download do certificado
          </a>
        </div>
      )}
    </div>
  )
}
