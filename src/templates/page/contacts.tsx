import React from "react"
import { Budget } from "@/components/Budget"
import GradientBar from "@/components/GradientBar"
import Container from "@/components/Container"
// import WeServeAllOfBrazil from "@/components/WeServeAllOfBrazil"

export interface ContactsProps {
  content: {
    title: string
  }
}

export default function Contacts({ content }: ContactsProps) {
  const { title } = content
  return (
    <div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <Container>
          <section className="flex w-full flex-col justify-between gap-10 rounded-sm md:flex-row md:items-stretch lg:gap-20">
            <div className="w-full md:w-3/5">
              <h2 className="font-bold uppercase">
                Nossos canais para contato
              </h2>
              <GradientBar />
              <Budget.Contacts />
            </div>
          </section>
        </Container>
        <Container>
          <section className="flex w-full flex-col justify-between rounded-sm">
            <div>
              <h2 className="text-center font-bold uppercase">{title}</h2>
              <GradientBar className="mx-auto text-center" />
            </div>
            <iframe
              className="h-96 w-full rounded-sm"
              title="Localização da Fatruwal Vedações Industriais em Borracha"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14621.185038580661!2d-46.4774273!3d-23.629559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce433eb065bc23%3A0x6739a49068ce7972!2sFatruwal%20Veda%C3%A7%C3%B5es%20de%20Borracha!5e0!3m2!1sen!2sbr!4v1682788522776!5m2!1sen!2sbr"
            />
          </section>
        </Container>
      </div>
      <section className="flex h-full w-full justify-center bg-secondary-foreground-100 py-8">
        <Container className="h-full">
          <h2 className="text-center font-bold uppercase">
            Atendemos para todo o Brasil
          </h2>
          <GradientBar className="mx-auto text-center" />
          {/* <WeServeAllOfBrazil /> */}
        </Container>
      </section>
    </div>
  )
}
