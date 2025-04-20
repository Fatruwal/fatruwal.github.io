import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import CertificateSGS from "@/assets/CertificateSGS.png"
import { BottomBar } from "./BottomBar"
import { ContactsNumber } from "../ContactsNumber"
import { graphql, Link, useStaticQuery } from "gatsby"

interface MenuQueryData {
  allWpMenuItem: {
    nodes: Array<{
      label: string
      path: string
    }>
  }
}

type LinkTitle = {
  path: string
  title: string
}

const Footer: React.FC = () => {
  const data = useStaticQuery<MenuQueryData>(graphql`
    query FooterMenuQuery {
      allWpMenuItem(
        filter: {
          menu: { node: { name: { eq: "footer-menu" } } }
          parentId: { eq: null }
        }
        sort: { order: ASC }
      ) {
        nodes {
          label
          path
        }
      }
    }
  `)
  console.log("footer", data)

  const menuItems: LinkTitle[] = data.allWpMenuItem.nodes.map(item => ({
    path: item.path || "/",
    title: item.label,
  }))

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

            <div className="mt-8 border-l-hairline border-l-white pl-8 md:mt-0">
              <ul className="space-y-3 text-white first-line:font-bold">
                {menuItems.map(link => (
                  <li>
                    <Link
                      to={link.path}
                      className="text-white transition duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-hairline border-l-white md:mt-0">
              <h3 className="mb-4 text-lg font-semibold">Contatos</h3>
              <ContactsNumber direction="column" />
            </div>

            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 text-lg font-semibold">Certificados</h3>
              <div>
                <img
                  width="92"
                  height="90"
                  src={CertificateSGS}
                  alt="Empresa com certificação ISO 9001"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </footer>
  )
}

export default Footer
