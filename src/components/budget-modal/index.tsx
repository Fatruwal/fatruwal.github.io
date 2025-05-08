import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ContactComponent } from "../ContactComponent"
import GradientBar from "@/components/GradientBar"
import { Budget } from "@/components/Budget"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"

const Modal = ({
  children,
}: React.PropsWithChildren<{
  sizeInSmallScreen?: "small" | "medium"
}>) => {
  return (
    <Dialog>
      {children}
      <DialogContent className="max-h-[80vh] w-[95vw] max-w-5xl overflow-y-auto border-none bg-white p-0 sm:rounded-md">
        <div className="relative">
          <div className="px-4 py-10 pb-2 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <DialogTitle className="mb-2 text-[2.315rem] font-bold leading-[2.315rem]">
                  SOLICITE O SEU <br />
                  ORÇAMENTO!
                </DialogTitle>
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

export const Trigger = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <DialogTrigger
      {...props}
      className={cn(
        "flex h-9 w-full items-center justify-center border-0 bg-transparent px-3 py-1 text-sm text-primary-800",
        className,
      )}
    >
      {children}
    </DialogTrigger>
  )
}

const budget = {
  Trigger,
  Modal,
}
export { budget }
