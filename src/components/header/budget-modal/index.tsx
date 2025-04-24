import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { FaRegEnvelope } from "react-icons/fa"
import BudgetBanner from "@/assets/BudgetBanner.png"
import BudgetFormIcon from "@/assets/BudgetFormIcon"
import { ContactsNumber } from "../../ContactsNumber"
import { BudgetForm } from "./form"

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
                <span className="my-6 block h-1 w-48 bg-blue-gradient" />
                <div className="px-2">
                  <p className="mb-8 text-xl text-gray-600">
                    Nos envie uma mensagem ou entre em contato através de uma
                    dos nossos canais de atendimento!
                  </p>

                  <div className="mb-8 flex flex-col justify-center gap-4">
                    <ContactsNumber
                      className="mb-0 flex-col justify-between sm:flex"
                      direction="row"
                      icons="rounded"
                      text="bold"
                    />
                    <div className="flex items-center gap-2">
                      <div className="rounded-sm bg-primary-500">
                        <FaRegEnvelope className="rounded-sm bg-primary-500 p-2 text-4xl text-primary-foreground-100 sm:text-5xl" />
                      </div>
                      <p className="text-lg font-bold text-primary-foreground-500">
                        contato@fatruwal.com.br
                      </p>
                    </div>
                  </div>
                  <img src={BudgetBanner} alt="Banner de contato" />
                </div>
              </div>
              <BudgetForm />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BudgetModal
