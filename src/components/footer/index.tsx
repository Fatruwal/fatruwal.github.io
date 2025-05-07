import React from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { useForm } from "react-hook-form"
import CertificateSGS from "@/assets/CertificateSGS.png"
import { BottomBar } from "./BottomBar"
import { ContactComponent } from "../ContactComponent"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SocialMedia } from "../SocialMedia"

interface MenuQueryData {
  allWpMenuItem: {
    nodes: Array<{
      label: string
      path: string
    }>
  }
}

type LinkTitle = {
  path: string
  title: string
}

interface NewletterForm {
  email: string
}

const Footer: React.FC = () => {
  const data = useStaticQuery<MenuQueryData>(graphql`
    query FooterMenuQuery {
      allWpMenuItem(
        filter: {
          menu: { node: { name: { eq: "footer-menu" } } }
          parentId: { eq: null }
        }
        sort: { order: ASC }
      ) {
        nodes {
          label
          path
        }
      }
    }
  `)

  const menuItems: LinkTitle[] = data.allWpMenuItem.nodes.map(item => ({
    path: item.path || "/",
    title: item.label,
  }))

  const form = useForm<NewletterForm>({
    defaultValues: {
      email: "",
    },
  })

  return (
    <footer className="bg-white text-white">
      <div className="bg-primary-500 py-10">
        <div className="container mx-auto px-4 lg:max-w-[1320px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-10">
            {/* First column */}
            <div className="space-y-6 lg:col-span-4">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="mb-2 text-center text-lg font-semibold lg:text-start">
                        Novidades e ofertas por email
                      </FormLabel>
                      <div className="flex">
                        <div className="relative flex-grow">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <FaRegEnvelope className="text-white" />
                          </div>
                          <FormControl>
                            <Input
                              className="h-[40px] rounded-none pl-10 placeholder:text-white"
                              placeholder="Insira seu melhor e-mail"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <Button className="h-[40px] rounded-none bg-white text-primary-700">
                          Enviar
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
              <SocialMedia
                theme="dark"
                variant="always"
                size="lg"
                className="mx-auto w-full justify-center lg:justify-start"
              />
              <div className="flex flex-col items-center justify-center text-white lg:items-start">
                <h3 className="mb-2 font-semibold">Endereço</h3>
                <p className="text-center text-sm lg:text-start">
                  Rua Hamilton Fernandes, 56 - Sônia Maria - Mauá-SP - CEP:
                  09380-390
                </p>
              </div>
            </div>

            <div className="border-t-hairline border-white pt-8 lg:col-span-2 lg:border-l-hairline lg:border-t-0 lg:pl-8">
              <ul className="flex flex-col items-center space-y-3 text-white">
                {menuItems.map(link => (
                  <li key={link.title} className="first-of-type:font-bold">
                    <Link to={link.path} className="text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-hairline border-white pt-8 lg:col-span-2 lg:border-l-hairline lg:border-t-0 lg:pl-8">
              <h3 className="mb-4 text-center text-lg font-semibold lg:text-start">
                Contatos
              </h3>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 lg:items-start">
                <ContactComponent.Whatsapp />
                <ContactComponent.Phone />
              </div>
            </div>

            <div className="border-t-hairline border-white pt-8 md:mt-0 lg:col-span-2 lg:border-t-0">
              <h3 className="mb-4 text-center text-lg font-semibold lg:text-start">
                Certificados
              </h3>
              <div className="flex justify-center lg:justify-start">
                <img
                  width="92"
                  height="90"
                  src={CertificateSGS}
                  alt="Empresa com certificação ISO 9001"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </footer>
  )
}

export default Footer
