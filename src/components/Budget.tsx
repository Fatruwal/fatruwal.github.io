import React from "react"
import BudgetBanner from "@/assets/BudgetBanner.png"
import { Button } from "@/components/ui/button"
import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { ContactComponent } from "./ContactComponent"
import { cn } from "@/lib/utils"

interface FormI {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const Contacts = () => {
  return (
    <div className="mb-8 flex flex-col justify-center gap-4">
      <div className="flex items-center gap-4">
        <ContactComponent.Whatsapp size="md" icon="rounded" text="bold" />
        <ContactComponent.Phone size="md" icon="rounded" text="bold" />
      </div>
      <ContactComponent.Email size="md" icon="rounded" text="bold" />
    </div>
  )
}

const Banner = () => {
  return <img src={BudgetBanner} alt="Banner de contato" />
}

const Form = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const form = useForm<FormI>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  return (
    <FormComponent {...form}>
      <div
        {...props}
        className={cn(
          "flex h-fit flex-col gap-4 rounded-sm bg-secondary-foreground-100 p-4 sm:grid sm:grid-cols-2 sm:p-8",
          className,
        )}
      >
        <div className="max-h-24">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-1xl font-bold">Nome:</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                    placeholder="Insira seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-h-24">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-1xl font-bold">Empresa:</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                    placeholder="Insira o nome da empresa"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-h-24">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-1xl font-bold">E-mail:</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                    placeholder="Insira seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-h-24">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-1xl font-bold">Telefone:</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                    placeholder="Insira seu telefone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2 space-y-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-1xl font-bold">Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-24 w-full rounded border-0 bg-white px-4 outline-none"
                    placeholder="Insira uma mensagem"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-2 md:col-span-2">
          <Button
            type="submit"
            className="w-full rounded-sm border-0 bg-primary-500 px-6 py-6 text-xl font-bold text-white hover:bg-blue-700 sm:w-fit"
          >
            ENVIAR MENSAGEM
          </Button>
        </div>
      </div>
    </FormComponent>
  )
}

export const Budget = {
  Contacts,
  Form,
  Banner,
}
