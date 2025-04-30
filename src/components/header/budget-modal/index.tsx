import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { FaRegEnvelope } from "react-icons/fa"
import BudgetBanner from "@/assets/BudgetBanner.png"
import BudgetFormIcon from "@/assets/BudgetFormIcon"
import { ContactComponent } from "../../ContactComponent"
import { BudgetForm } from "./form"
import GradientBar from "@/components/GradientBar"
import { Budget } from "@/components/Budget"

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
            className="font-normal data-[size-in-small-screen='medium']:text-sm data-[size-in-small-screen='small']:text-xxs md:text-sm"
          >
            Solicite um
          </span>
          <strong
            data-size-in-small-screen={sizeInSmallScreen}
            className="data-[size-in-small-screen='medium']:text-sm data-[size-in-small-screen='small']:text-xxs md:text-sm"
          >
            Orçamento{" "}
          </strong>
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] w-[95vw] max-w-5xl overflow-y-auto border-none bg-white p-0 sm:rounded-lg">
        <div className="relative">
          <div className="px-4 py-10 pb-2 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-2 text-[2.315rem] font-bold leading-[2.315rem]">
                  SOLICITE O SEU <br />
                  ORÇAMENTO!
                </h2>
                <GradientBar className="my-6 w-48" />
                <div className="px-2">
                  <p className="mb-8 text-xl text-gray-600">
                    Nos envie uma mensagem ou entre em contato através de uma
                    dos nossos canais de atendimento!
                  </p>

                  <div className="flex flex-col justify-center gap-4">
                    <span className="mb-0 flex flex-col justify-between gap-4 sm:flex-row">
                      <ContactComponent.Whatsapp
                        size="md"
                        icon="rounded"
                        text="bold"
                      />
                      <ContactComponent.Phone
                        size="md"
                        icon="rounded"
                        text="bold"
                      />
                    </span>
                    <div className="flex items-center gap-2">
                      <ContactComponent.Email
                        size="md"
                        icon="rounded"
                        text="bold"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Budget.Banner />
                  </div>
                </div>
              </div>
              <Budget.Form />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BudgetModal
