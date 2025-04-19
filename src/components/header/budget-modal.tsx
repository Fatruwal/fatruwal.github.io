import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FaWhatsapp } from "react-icons/fa"
import { BiPhone } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import BudgetFormIcon from "@/assets/BudgetFormIcon"

const BudgetModal: React.FC<{
  sizeInSmallScreen?: "small" | "medium"
}> = ({ sizeInSmallScreen = "small" }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center border-0 bg-transparent text-primary-800">
        <BudgetFormIcon
          data-size-in-small-screen={sizeInSmallScreen}
          className="bg-white data-[size-in-small-screen='medium']:mr-1 data-[size-in-small-screen='small']:mr-1 data-[size-in-small-screen='medium']:h-[30px] data-[size-in-small-screen='medium']:w-[30px] md:mr-2"
        />
        <div
          data-size-in-small-screen={sizeInSmallScreen}
          className="flex flex-col items-center justify-center data-[size-in-small-screen='medium']:text-sm data-[size-in-small-screen='medium']:leading-5 data-[size-in-small-screen='small']:leading-[10px] md:text-sm md:leading-5"
        >
          <span
            data-size-in-small-screen={sizeInSmallScreen}
            className="data-[size-in-small-screen='small']:text-xxs font-normal data-[size-in-small-screen='medium']:text-sm md:text-sm"
          >
            Solicite um
          </span>
          <strong
            data-size-in-small-screen={sizeInSmallScreen}
            className="data-[size-in-small-screen='small']:text-xxs data-[size-in-small-screen='medium']:text-sm md:text-sm"
          >
            Orçamento{" "}
          </strong>
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] w-[95vw] max-w-5xl overflow-y-auto border-none bg-white p-0 sm:rounded-lg">
        <div className="relative">
          <div className="px-4 py-10 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <h2 className="mb-2 text-[2.315rem] font-bold leading-[2.315rem]">
                  SOLICITE O SEU <br />
                  ORÇAMENTO!
                </h2>
                <span className="linear-gradient mb-8" />
                <div className="px-2">
                  <p className="mb-8 text-xl text-gray-600">
                    Nos envie uma mensagem ou entre em contato através de uma
                    dos nossos canais de atendimento!
                  </p>

                  <div className="mb-8 grid grid-cols-1 items-center justify-center gap-4 text-gray-600 sm:grid-cols-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
                      className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <FaWhatsapp className="text-4xl" />
                      </div>
                      <p className="text-xl font-bold">11 96301-4309</p>
                    </a>

                    <div className="mt-0 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <BiPhone className="text-4xl" />
                      </div>
                      <p className="text-xl font-bold">11 2668-3227</p>
                    </div>

                    <div className="flex items-center gap-3 p-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <MdEmail className="text-4xl" />
                      </div>
                      <p className="text-xl font-bold">
                        contato@fatruwal.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form className="grid grid-cols-1 gap-4 bg-gray-100 p-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-1xl font-bold"
                    >
                      Nome:
                    </Label>
                    <Input
                      id="contact-name"
                      name="your-name"
                      placeholder="Insira seu nome"
                      className="w-full rounded border-0 bg-white px-2 py-8 outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-company"
                      className="text-1xl font-bold"
                    >
                      Empresa:
                    </Label>
                    <Input
                      id="contact-company"
                      name="company"
                      placeholder="Nome da empresa"
                      className="w-full rounded border-0 bg-white px-2 py-8"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-1xl font-bold"
                    >
                      E-mail:
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Insira seu e-mail"
                      className="w-full rounded border-0 bg-white px-2 py-8"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-phone"
                      className="text-1xl font-bold"
                    >
                      Telefone:
                    </Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Insira seu telefone"
                      className="w-full rounded border-0 bg-white px-2 py-8"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="contact-msg" className="text-1xl font-bold">
                      Mensagem:
                    </Label>
                    <Textarea
                      id="contact-msg"
                      name="message"
                      rows={5}
                      className="w-full rounded border-0 bg-white p-2"
                    />
                  </div>

                  <div className="mt-2 md:col-span-2">
                    <Button
                      type="submit"
                      className="rounded-lg border-0 bg-primary-900 px-6 py-6 text-xl font-bold text-white hover:bg-blue-700"
                    >
                      ENVIAR MENSAGEM
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BudgetModal
