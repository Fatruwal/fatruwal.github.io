import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { BsTelephone } from "react-icons/bs"
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa"

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
    icon: {
      rounded: "text-primary-foreground-100 bg-primary-500 rounded-sm p-2",
      blank: "text-xl text-primary-foreground-100",
    },
    size: {
      sm: "text-xl",
      md: "text-3xl md:text-4xl lg:text-5xl",
    },
  },
  defaultVariants: {
    icon: "blank",
    size: "sm",
  },
})

export interface IconContactProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof textVariant>,
    VariantProps<typeof iconVariant> {}

const Whatsapp = ({ icon, size, text, className }: IconContactProps) => {
  return (
    <span>
      <a
        className={cn(textVariant({ text }), className)}
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
      >
        <FaWhatsapp className={iconVariant({ icon, size })} />
        11 96301-4309
      </a>
    </span>
  )
}

const Phone = ({ icon, size, text, className }: IconContactProps) => {
  return (
    <span>
      <a className={cn(textVariant({ text }), className)} href="tel:1126683227">
        <BsTelephone className={iconVariant({ icon, size })} />
        11 2668-3227
      </a>
    </span>
  )
}

const Email = ({ icon, size, text, className }: IconContactProps) => {
  return (
    <span>
      <span className={cn(textVariant({ text }), className)}>
        <FaRegEnvelope className={iconVariant({ icon, size })} />
        contato@fatruwal.com.br
      </span>
    </span>
  )
}

export const ContactComponent = {
  Whatsapp,
  Phone,
  Email,
}
