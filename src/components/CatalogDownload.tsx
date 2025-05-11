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
import { ContactForm } from "./services/contact-form"
import { useToast } from "@/hooks/use-toast"

export const formSchema = z.object({
  name: z
    .string({ required_error: "Por favor, insira seu nome." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Apenas letras são permitidas." })
    .min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    })
    .max(100, {
      message: "O nome deve ter no máximo 100 caracteres.",
    }),
  company: z
    .string({ required_error: "Por favor, insira o nome da empresa." })
    .min(2, {
      message: "O nome da empresa deve ter pelo menos 2 caracteres.",
    })
    .max(100, {
      message: "O nome da empresa deve ter no máximo 100 caracteres.",
    }),
  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de e-mail válido." }),
  phone: z
    .string({ required_error: "Por favor, insira seu telefone." })
    .min(8, {
      message: "O telefone deve ter pelo menos 8 caracteres.",
    })
    .max(15, {
      message: "O telefone deve ter no máximo 15 caracteres.",
    }),
  message: z.string().min(0).max(500).optional(),
})

export const Modal = ({
  children,
  link,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">> & { link: string }) => {
  const { toast } = useToast()
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
    try {
      await ContactForm.downloadCatalog(
        data.name,
        data.company,
        data.email,
        data.phone,
      )
      window.open(link, "_blank")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao baixar o catálogo.",
      })
    }
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
                          autoComplete="name"
                          type="text"
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
                          autoComplete="off"
                          type="text"
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
                          autoComplete="email"
                          type="email"
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
                          autoComplete="phone"
                          type="number"
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
