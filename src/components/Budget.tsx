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
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactForm } from "./services/contact-form"
import { useToast } from "@/hooks/use-toast"
import { PhoneFormat } from "@/common/PhoneFormat"

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

export const formSchema = z.object({
  name: z
    .string({ required_error: "Por favor, insira seu nome." })
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

const Form = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  })
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await ContactForm.budget(
        data.name,
        data.company,
        data.email,
        data.phone,
        data.message || "",
      )
      toast({
        variant: "default",
        title: "Sucesso",
        description: "Mensagem enviada com sucesso.",
      })
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      })
    }
  }
  return (
    <FormComponent {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          {...props}
          className={cn(
            "flex h-fit flex-col gap-4 rounded-sm bg-secondary-foreground-100 p-4 sm:grid sm:grid-cols-2 sm:p-8",
            className,
          )}
        >
          <div className="">
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
          <div className="">
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
          <div className="">
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
          <div className="">
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
                      className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                      placeholder="Insira seu telefone"
                      {...field}
                      onChange={e =>
                        field.onChange(
                          PhoneFormat.formatPhoneNumber(e.target.value),
                        )
                      }
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
                      className="min-h-20 w-full rounded border-0 bg-white px-4 outline-none"
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
      </form>
    </FormComponent>
  )
}

export const Budget = {
  Contacts,
  Form,
  Banner,
}
