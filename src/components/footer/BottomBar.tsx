import React from "react"
import FiveMindsLogo from "@/assets/FiveMindsLogo"

export const BottomBar = () => {
  return (
    <div className="bg-primary-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between xl:grid xl:grid-cols-12">
          <span className="col-span-3" />
          <p className="col-span-6 mb-4 text-center text-xs text-white lg:text-nowrap lg:text-start xl:mb-0">
            K2 PRODUTOS INDUSTRIAIS EIRELI - ME - CNPJ: 12.228.969/0001-01 ©
            Todos os direitos reservados. {new Date().getFullYear()}
          </p>
          <div className="flex flex-col items-center xl:flex-row">
            <span className="w-full text-nowrap text-center text-xxs text-white lg:mr-1 xl:text-start">
              Developed by
            </span>
            <a
              href="https://www.5minds.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiveMindsLogo className="w-24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
