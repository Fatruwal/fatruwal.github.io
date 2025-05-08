import React from "react"
import { Budget } from "@/components/Budget"
import GradientBar from "@/components/GradientBar"
import Container from "@/components/Container"
import WeServeAllOfBrazil from "@/components/WeServeAllOfBrazil"

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
    <div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <Container>
          <section className="flex w-full flex-col justify-between gap-10 rounded-sm md:flex-row md:items-stretch lg:gap-20">
            <div className="w-full md:w-2/5">
              <Budget.Form className="h-full" />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-bold">OUTROS CANAIS PARA CONTATO</h2>
              <GradientBar />
              <Budget.Contacts />
              <Budget.Banner />
            </div>
          </section>
        </Container>
        <Container>
          <section className="flex w-full flex-col justify-between gap-10 rounded-sm lg:gap-20">
            <h2>{title}</h2>
            <p>
              Location: {location.latitude}, {location.longitude}
            </p>
          </section>
        </Container>
      </div>
      <section className="flex h-full w-full justify-center bg-secondary-foreground-100 py-8">
        <Container className="h-full">
          <h2 className="text-center font-bold uppercase">
            Atendemos para todo o Brasil
          </h2>
          <GradientBar className="mx-auto text-center" />
          <WeServeAllOfBrazil />
        </Container>
      </section>
    </div>
  )
}
