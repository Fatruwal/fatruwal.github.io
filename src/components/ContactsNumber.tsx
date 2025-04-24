import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"

const containerVariant = cva("flex", {
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

const textVariant = cva("flex gap-2 text-nowrap items-center", {
  variants: {
    text: {
      bold: "font-bold text-primary-foreground-500",
      normal: "text-primary-foreground-100",
    },
  },
  defaultVariants: {
    text: "normal",
  },
})

const iconVariant = cva("", {
  variants: {
    icons: {
      rounded:
        "text-4xl sm:text-5xl text-primary-foreground-100 bg-primary-500 rounded-sm p-2",
      blank: "text-xl text-primary-foreground-100",
    },
  },
  defaultVariants: {
    icons: "blank",
  },
})

export interface ContactNumberProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariant>,
    VariantProps<typeof textVariant>,
    VariantProps<typeof iconVariant> {}

export const ContactsNumber = ({
  icons,
  text,
  direction,
  className,
}: ContactNumberProps) => {
  return (
    <div className={cn(containerVariant({ direction }), className)}>
      <span>
        <a
          className={textVariant({ text })}
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
        >
          <FaWhatsapp className={iconVariant({ icons })} />
          11 96301-4309
        </a>
      </span>
      <span>
        <a className={textVariant({ text })} href="tel:1126683227">
          <BsTelephone className={iconVariant({ icons })} />
          11 2668-3227
        </a>
      </span>
    </div>
  )
}
