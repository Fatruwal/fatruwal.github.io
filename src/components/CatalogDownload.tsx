import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
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

const formSchema = z.object({
  name: z.string().min(4, {
    message: "O nome deve ter pelo menos 4 caracteres.",
  }),
  company: z.string().min(2, {
    message: "A empresa deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  phone: z.string().min(8, {
    message: "O número de telefone deve ter pelo menos 8 caracteres.",
  }),
})

export const Modal = ({
  children,
  link,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">> & { link: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(formSchema),
  })

  const downloadCatalog = async (data: z.infer<typeof formSchema>) => {
    window.open(link, "_blank")
  }

  function mask(o: any, f: string) {
    setTimeout(function () {
      var v = mphone(o.value)
      if (v != o.value) {
        o.value = v
      }
    }, 1)
  }

  function mphone(v: string) {
    var r = v.replace(/\D/g, "")
    r = r.replace(/^0/, "")
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3")
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3")
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2")
    } else {
      r = r.replace(/^(\d*)/, "($1")
    }
    return r
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
