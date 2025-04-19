import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-white">
      <div className="bg-primary-500 py-10">
        <div className="container mx-auto px-4 lg:max-w-[1320px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* First column */}
            <div className="space-y-6">
              <div className="newsletter">
                <h3 className="mb-4 text-lg font-semibold">
                  Novidades e ofertas por e-mail
                </h3>
                <div className="flex border-white">
                  <input
                    type="email"
                    className="flex-grow border border-gray-300 bg-primary-500 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Insira seu e-mail"
                  />
                  <button
                    type="submit"
                    className="bg-white px-4 py-2 font-bold text-primary-700"
                  >
                    Enviar
                  </button>
                </div>
              </div>

              <div className="social">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://www.facebook.com/Fatruwal/?locale=pt_BR"
                      title="Facebook Fatruwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-black hover:bg-gray-100"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fatruwal.vedacoes/"
                      title="Instagram Fatruwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-black hover:bg-gray-100"
                    >
                      <FaInstagram size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/fatruwalfabricandosolucoes/"
                      title="Linkedin Fatruwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-black hover:bg-gray-100"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCZl4Cc307IZNlMhmQLayWyw"
                      title="Youtube Fatruwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-black hover:bg-gray-100"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="address text-white">
                <h3 className="mb-2 font-semibold">Endereço</h3>
                <p className="text-sm">
                  Rua Hamilton Fernandes, 56 - Sônia Maria - Mauá-SP - CEP:
                  09380-390
                </p>
              </div>
            </div>

            {/* Second column */}
            <div className="mt-8 md:mt-0">
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://fatruwal.com.br"
                    className="transition duration-200 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://fatruwal.com.br/quem-somos"
                    className="transition duration-200 hover:text-blue-600"
                  >
                    Quem somos
                  </a>
                </li>
                <li>
                  <a
                    href="https://fatruwal.com.br/qualidade"
                    className="transition duration-200 hover:text-blue-600"
                  >
                    Qualidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://fatruwal.com.br/blog"
                    className="transition duration-200 hover:text-blue-600"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Third column */}
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 text-lg font-semibold">Contatos</h3>
              <div className="space-y-2">
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
                    className="text-gray-600 transition duration-200 hover:text-blue-600"
                  >
                    11 96301-4309
                  </a>
                </div>
                <div>
                  <a
                    href="tel:1126683227"
                    className="text-gray-600 transition duration-200 hover:text-blue-600"
                  >
                    11 2668-3227
                  </a>
                </div>
              </div>
            </div>

            {/* Fourth column */}
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 text-lg font-semibold">Certificado</h3>
              <div>
                <img
                  width="112"
                  height="73"
                  src={""}
                  alt="Empresa com certificação ISO 9001"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-primary-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-[12px] text-white md:mb-0">
              K2 PRODUTOS INDUSTRIAIS EIRELI - ME - CNPJ: 12.228.969/0001-01 ©
              Todos os direitos reservados. {new Date().getFullYear()}
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-[12px] text-white">Developed by</span>
              <a
                href="https://www.5minds.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="" alt="5minds logo" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
