import React from "react"
import { Budget } from "@/components/Budget"
import GradientBar from "@/components/GradientBar"

export interface ContactsProps {
  content: {
    title: string
    location: {
      longitude: number
      latitude: number
      zoom: number
    }
  }
}

export default function Contacts({ content }: ContactsProps) {
  const { title, location } = content
  return (
    <div className="-mt-8 flex flex-col items-center justify-center">
      <div className="mx-10 flex w-full flex-col justify-between gap-10 rounded-sm p-4 md:mx-4 md:flex-row md:items-stretch lg:w-10/12 lg:gap-20 xl:max-w-screen-2xl">
        <div className="w-full md:w-2/5">
          <Budget.Form className="h-full" />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="font-bold">OUTROS CANAIS PARA CONTATO</h2>
          <GradientBar />
          <Budget.Contacts />
          <Budget.Banner />
        </div>
      </div>
      <div className="mx-10 flex w-full flex-col justify-between gap-10 rounded-sm p-4 md:mx-4 lg:w-10/12 lg:gap-20 xl:max-w-screen-2xl">
        <h2>{title}</h2>
        <p>
          Location: {location.latitude}, {location.longitude}
        </p>
      </div>
    </div>
  )
}
