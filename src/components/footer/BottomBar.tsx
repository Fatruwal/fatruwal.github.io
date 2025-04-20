import React from "react"
import FiveMindsLogo from "@/assets/FiveMindsLogo"

export const BottomBar = () => {
  return (
    <div className="bg-primary-700 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center justify-between">
          <span className="col-span-3" />
          <p className="col-span-6 mb-4 text-nowrap text-xs text-white md:mb-0">
            K2 PRODUTOS INDUSTRIAIS EIRELI - ME - CNPJ: 12.228.969/0001-01 ©
            Todos os direitos reservados. {new Date().getFullYear()}
          </p>
          <div className="flex items-center">
            <span className="mr-1 w-full text-nowrap text-xxs text-white">
              Developed by
            </span>
            <a
              href="https://www.5minds.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3"
            >
              <FiveMindsLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
