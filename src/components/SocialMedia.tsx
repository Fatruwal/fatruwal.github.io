import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const socialMediaVariant = cva("mb-0 flex items-center space-x-2", {
  variants: {
    variant: {
      occutable: "hidden lg:flex",
      always: "flex",
    },
    theme: {
      light: "text-primary-500 text-sm",
      dark: "text-primary-900 text-sm",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "always",
    theme: "light",
    size: "sm",
  },
})

export interface SocialMediaProps
  extends React.ComponentProps<"ul">,
    VariantProps<typeof socialMediaVariant> {}

export const SocialMedia = ({
  className,
  theme,
  variant,
  size,
  ...props
}: SocialMediaProps) => {
  return (
    <ul {...props} className={cn(socialMediaVariant({ variant }), className)}>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.facebook.com/Fatruwal/?locale=pt_BR"
          title="Facebook Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className={cn(socialMediaVariant({ theme, size }))} />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.instagram.com/fatruwal.vedacoes/"
          title="Instagram Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={cn(socialMediaVariant({ theme, size }))} />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.linkedin.com/company/fatruwalfabricandosolucoes/"
          title="Linkedin Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={cn(socialMediaVariant({ theme, size }))} />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.youtube.com/channel/UCZl4Cc307IZNlMhmQLayWyw"
          title="Youtube Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className={cn(socialMediaVariant({ theme, size }))} />
        </a>
      </li>
    </ul>
  )
}
