import React from "react"
import { cn } from "@/lib/utils"
import IsoIcon from "@/assets/IsoIcon"
import Winner from "@/assets/Winner"
import StarIcon from "@/assets/Start"
import Medal from "@/assets/medal"

const Card = ({
  className,
  Icon,
  title,
  description,
  ...props
}: React.ComponentProps<"div"> & {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) => {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-1 px-2 lg:gap-2 lg:px-4", className)}
    >
      <Icon className="h-10 w-20 text-primary-500" />
      <div className="flex flex-col space-y-1">
        <h5 className="leading-2 text-sm font-bold uppercase">{title}</h5>
        <span className="text-xs leading-[1.1] text-secondary-foreground-500">
          {description}
        </span>
      </div>
    </div>
  )
}

const CertificateCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Card
      {...props}
      Icon={IsoIcon}
      title="Certificado"
      description="Somos certificados com o ISO 9001"
      className={cn("", className)}
    />
  )
}

const ExcellenceCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Card
      {...props}
      Icon={Winner}
      title="Excelência"
      description="Oferecemos produtos com excelência"
      className={cn("", className)}
    />
  )
}

const SatisfationCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Card
      {...props}
      Icon={StarIcon}
      className={cn("border-primary-50", className)}
      title="SATISFAÇÃO"
      description="Sua satisfação é nosso maior objetivo"
    />
  )
}

const QualityCard = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <Card
      {...props}
      Icon={Medal}
      className={cn("border-primary-50", className)}
      title="qualidade"
      description="Melhoria continua da Gestão de Qualidade"
    />
  )
}

export const aboutCompany = {
  CertificateCard,
  ExcellenceCard,
  SatisfationCard,
  QualityCard,
}
