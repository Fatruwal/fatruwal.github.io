import React from "react"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import GradientBar from "./GradientBar"
import { cn } from "@/lib/utils"

interface FormI {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export const Modal = ({
  children,
  link,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">> & { link: string }) => {
  const form = useForm<FormI>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
    },
  })

  const downloadCatalog = async (data: FormI) => {
    console.log("aaaaaa")
    window.open(link, "_blank")
  }
  return (
    <Dialog>
      {children}
      <DialogContent useOverlay className="p-8 px-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(downloadCatalog)}>
            <div
              {...props}
              className="flex h-fit flex-col gap-4 rounded-sm bg-secondary-foreground-100 p-4 sm:p-8"
            >
              <div className="mb-4">
                <DialogTitle className="text-h5 font-bold">
                  Preencha os dados e faça o download do catálogo!
                </DialogTitle>
                <GradientBar className="my-2" />
              </div>
              <div className="max-h-24">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-1xl font-bold">
                        Nome:
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full rounded-sm border-0 bg-white px-2 py-6 outline-none placeholder:text-primary-foreground-300"
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
                      <FormLabel className="text-1xl font-bold">
                        Empresa:
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full rounded-sm border-0 bg-white px-2 py-6 outline-none placeholder:text-primary-foreground-300"
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
                      <FormLabel className="text-1xl font-bold">
                        E-mail:
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full rounded-sm border-0 bg-white px-2 py-6 outline-none placeholder:text-primary-foreground-300"
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
                      <FormLabel className="text-1xl font-bold">
                        Telefone:
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full rounded-sm border-0 bg-white px-2 py-6 outline-none placeholder:text-primary-foreground-300"
                          placeholder="Insira seu telefone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-2">
                <Button
                  type="submit"
                  className="w-full rounded-sm border-0 bg-primary-500 px-6 py-6 text-lg text-xl font-bold uppercase text-primary-foreground-100 hover:bg-blue-700"
                >
                  Download do catálogo
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

const Trigger = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <DialogTrigger className={cn("", className)} {...props}>
      {children}
    </DialogTrigger>
  )
}

export const CatalogDownload = {
  Trigger,
  Modal,
}
