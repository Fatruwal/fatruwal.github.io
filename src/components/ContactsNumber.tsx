import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"

const contactNumberVariant = cva("flex ", {
  variants: {
    direction: {
      row: "gap-4",
      column: "flex-col gap-2",
    },
  },
  defaultVariants: {
    direction: "row",
  },
})

export interface ContactNumberProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof contactNumberVariant> {}

export const ContactsNumber = ({
  direction,
  className,
}: ContactNumberProps) => {
  return (
    <div className={cn(contactNumberVariant({ direction }), className)}>
      <span>
        <a
          className="flex items-center gap-2 text-white"
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
        >
          <FaWhatsapp className="text-1xl" />
          11 96301-4309
        </a>
      </span>
      <span>
        <a className="flex items-center gap-2 text-white" href="tel:1126683227">
          <BsTelephone className="text-1xl" />
          11 2668-3227
        </a>
      </span>
    </div>
  )
}
