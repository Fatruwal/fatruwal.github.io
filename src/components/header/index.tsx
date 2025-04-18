import React, { useState } from "react"
import logo from "@/assets/logo.webp"
import logo_sgs from "@/assets/logo-sgs.png"
import { FaWhatsapp } from "react-icons/fa"
import { BsTelephone } from "react-icons/bs"
import { Link } from "gatsby"
import Sidebar from "./sidebar"
import { FatherLinkTitle } from "./model"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export const links: FatherLinkTitle[] = [
  {
    path: "/",
    title: "Home",
    childrens: undefined,
  },
  {
    path: "/quem-somos",
    title: "Quem somos",
    childrens: undefined,
  },
  {
    path: "/produtos",
    title: "Produtos",
    childrens: [
      {
        path: "/categorias/aneis",
        title: "Anéis",
      },
      {
        path: "/categorias/arruelas-e-buchas",
        title: "Arruelas e Buchas",
      },
      {
        path: "/categorias/coxins-industriais",
        title: "Coxins",
      },
      {
        path: "/categorias/diafragmas-industriais",
        title: "Diafragmas",
      },
      {
        path: "/categorias/gaxetas-industriais",
        title: "Gaxetas",
      },
      {
        path: "/categorias/raspadores",
        title: "Raspadores",
      },
      {
        path: "/categorias/retentores",
        title: "Retentores",
      },
      {
        path: "/categorias/juntas-industriais",
        title: "Juntas",
      },
      {
        path: "/categorias/pecas-especiais",
        title: "Peças Especiais",
      },
      {
        path: "/categorias/perfil-de-borracha",
        title: "Perfil",
      },
      {
        path: "/categorias/ventosas",
        title: "Ventosas",
      },
    ],
  },
  {
    path: "/qualidade",
    title: "Qualidade",
    childrens: undefined,
  },
  {
    path: "/blog",
    title: "Blog",
    childrens: undefined,
  },
  {
    path: "/contato",
    title: "Contato",
    childrens: undefined,
  },
]

const Header: React.FC = () => {
  return (
    <header className="shadow-lg">
      {/* Topbar */}
      <section className="max-h-[40px] bg-primary-800 py-[8px] text-white">
        <div className="mx-auto mb-[5px] flex w-10/12 max-w-screen-2xl items-center justify-center px-4 lg:max-w-[1320px] lg:justify-between">
          <div className="flex space-x-6">
            <span>
              <a
                className="flex items-center gap-2 text-white"
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
              >
                <FaWhatsapp className="mb-[3px] text-[1.15rem]" />
                11 96301-4309
              </a>
            </span>
            <span>
              <a
                className="flex items-center gap-2 text-white"
                href="tel:1126683227"
              >
                <BsTelephone className="text-1xl" />
                11 2668-3227
              </a>
            </span>
          </div>
          <ul className="mb-0 hidden items-center space-x-2 lg:flex">
            <li className="mb-0">
              <a
                href="https://www.facebook.com/Fatruwal/?locale=pt_BR"
                title="Facebook Fatruwal"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                    fill="white"
                  />
                  <path
                    d="M8.47614 16.022H10.9091V9.92631H12.6117L12.7904 7.88217H10.9091V6.72085C10.9091 6.24266 11.009 6.04823 11.4714 6.04823H12.7904V3.94629H11.1036C9.2959 3.94629 8.47614 4.74502 8.47614 6.27419V7.89794H7.20972V9.96835H8.47614V16.022Z"
                    fill="#006CCF"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-0">
              <a
                href="https://www.instagram.com/fatruwal.vedacoes/"
                title="Instagram Fatruwal"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.80429 2.92893 2.92892C4.8043 1.05356 7.34784 0 10 0C12.6522 0 15.1957 1.05356 17.0711 2.92892C18.9464 4.80429 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20Z"
                    fill="white"
                  />
                  <path
                    d="M10.0001 5.48948C11.4633 5.48948 11.6369 5.48947 12.2159 5.52105C12.5644 5.52743 12.9094 5.59146 13.2369 5.71053C13.4754 5.79858 13.6912 5.93884 13.8685 6.12105C14.0513 6.29789 14.1916 6.51381 14.2791 6.75263C14.3981 7.08019 14.4621 7.42521 14.4685 7.77368C14.4685 8.35263 14.5001 8.52632 14.5001 9.99474C14.5001 11.4632 14.5001 11.6316 14.4685 12.2105C14.4621 12.559 14.3981 12.904 14.2791 13.2316C14.1916 13.4704 14.0513 13.6863 13.8685 13.8632C13.6912 14.0454 13.4754 14.1856 13.2369 14.2737C12.9094 14.3928 12.5644 14.4568 12.2159 14.4632C11.6369 14.4895 11.4633 14.4947 10.0001 14.4947C8.53695 14.4947 8.358 14.4947 7.77906 14.4632C7.43058 14.4568 7.08556 14.3928 6.758 14.2737C6.52081 14.1831 6.30554 14.0431 6.12642 13.8632C5.94529 13.685 5.8052 13.4695 5.7159 13.2316C5.59683 12.904 5.5328 12.559 5.52643 12.2105C5.52643 11.6316 5.49485 11.4579 5.49485 9.99474C5.49485 8.53158 5.49485 8.35263 5.52643 7.77368C5.5328 7.42521 5.59683 7.08019 5.7159 6.75263C5.8052 6.51476 5.94529 6.29923 6.12642 6.12105C6.30554 5.94107 6.52081 5.80115 6.758 5.71053C7.08556 5.59146 7.43058 5.52743 7.77906 5.52105C8.358 5.52105 8.53169 5.48948 10.0001 5.48948ZM10.0001 4.5C8.50537 4.5 8.32116 4.5 7.73169 4.53158C7.27637 4.54101 6.82603 4.62824 6.40011 4.78948C6.0342 4.92812 5.70221 5.14347 5.42642 5.42105C5.14767 5.69589 4.93215 6.02816 4.79485 6.39474C4.63565 6.82123 4.54849 7.27123 4.53695 7.72632C4.51063 8.31579 4.50537 8.5 4.50537 9.99474C4.50537 11.4895 4.50537 11.6737 4.53695 12.2579C4.54849 12.713 4.63565 13.163 4.79485 13.5895C4.93481 13.9474 5.14735 14.2724 5.41909 14.5442C5.69083 14.8159 6.01589 15.0285 6.37379 15.1684C6.79971 15.3297 7.25006 15.4169 7.70537 15.4263C8.29485 15.4526 8.47906 15.4579 9.97379 15.4579C11.4685 15.4579 11.6527 15.4579 12.237 15.4263C12.6923 15.4174 13.1428 15.3302 13.5685 15.1684C13.9264 15.0285 14.2515 14.8159 14.5232 14.5442C14.795 14.2724 15.0075 13.9474 15.1475 13.5895C15.3092 13.1637 15.3965 12.7133 15.4054 12.2579C15.4317 11.6737 15.437 11.4842 15.437 9.99474C15.437 8.50526 15.4369 8.31579 15.4054 7.72632C15.3965 7.27095 15.3092 6.82051 15.1475 6.39474C15.012 6.02722 14.7963 5.69457 14.5159 5.42105C14.2411 5.1423 13.9088 4.92678 13.5422 4.78948C13.1164 4.62773 12.666 4.54049 12.2106 4.53158C11.6264 4.53158 11.4369 4.5 9.94747 4.5"
                    fill="#006CCF"
                  />
                  <path
                    d="M10.0001 7.16309C9.44197 7.16205 8.89604 7.32662 8.43143 7.63597C7.96681 7.94532 7.60441 8.38554 7.39009 8.90092C7.17576 9.41631 7.11914 9.9837 7.22739 10.5313C7.33565 11.0789 7.60392 11.582 7.99824 11.9771C8.39256 12.3721 8.89521 12.6413 9.44258 12.7506C9.98996 12.8599 10.5574 12.8043 11.0732 12.591C11.589 12.3776 12.0299 12.016 12.3401 11.552C12.6503 11.088 12.8159 10.5423 12.8159 9.98414C12.8159 9.23687 12.5194 8.52012 11.9915 7.99122C11.4636 7.46232 10.7474 7.16449 10.0001 7.16309ZM10.0001 11.8105C9.63745 11.8115 9.2826 11.7048 8.9806 11.504C8.67859 11.3031 8.44302 11.0171 8.30374 10.6822C8.16446 10.3473 8.12774 9.97864 8.19825 9.62286C8.26875 9.26707 8.4433 8.94024 8.69977 8.68377C8.95624 8.42731 9.28307 8.25275 9.63885 8.18225C9.99463 8.11175 10.3633 8.14846 10.6982 8.28774C11.0331 8.42702 11.3191 8.66259 11.52 8.9646C11.7208 9.26661 11.8275 9.62145 11.8265 9.98414C11.8265 10.224 11.7792 10.4615 11.6874 10.683C11.5957 10.9046 11.4611 11.106 11.2915 11.2756C11.122 11.4451 10.9206 11.5797 10.699 11.6714C10.4775 11.7632 10.24 11.8105 10.0001 11.8105Z"
                    fill="#006CCF"
                  />
                  <path
                    d="M13.6 7.06845C13.6 7.19983 13.561 7.32826 13.4879 7.43742C13.4148 7.54659 13.3109 7.63158 13.1894 7.68161C13.0679 7.73165 12.9343 7.74447 12.8055 7.71845C12.6767 7.69243 12.5586 7.62875 12.4661 7.53548C12.3735 7.44221 12.3108 7.32355 12.2858 7.19457C12.2608 7.06558 12.2747 6.93208 12.3257 6.811C12.3767 6.68992 12.4625 6.58671 12.5722 6.51448C12.682 6.44225 12.8107 6.40425 12.9421 6.40529C13.0289 6.40529 13.1149 6.42248 13.1951 6.45587C13.2753 6.48926 13.348 6.53819 13.4092 6.59984C13.4703 6.66149 13.5187 6.73464 13.5514 6.81507C13.5842 6.89549 13.6007 6.98161 13.6 7.06845Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-0">
              <a
                href="https://www.linkedin.com/company/fatruwalfabricandosolucoes/"
                title="Linkedin Fatruwal"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C7.34783 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34783 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20Z"
                    fill="white"
                  />
                  <path
                    d="M7.53169 7.75244H5.45801V14.4472H7.53169V7.75244Z"
                    fill="#006CCF"
                  />
                  <path
                    d="M6.48414 6.87354C6.7292 6.87563 6.96936 6.80486 7.17414 6.67023C7.37892 6.5356 7.53908 6.34317 7.63431 6.11736C7.72954 5.89155 7.75554 5.64253 7.70901 5.40192C7.66248 5.16131 7.54553 4.93994 7.37298 4.76591C7.20043 4.59188 6.98007 4.47303 6.73986 4.42445C6.49965 4.37587 6.25043 4.39974 6.02381 4.49303C5.79719 4.58633 5.6034 4.74484 5.46703 4.94846C5.33065 5.15208 5.25783 5.39163 5.25782 5.6367C5.25713 5.79843 5.2883 5.95872 5.34956 6.1084C5.41081 6.25809 5.50095 6.39425 5.61482 6.5091C5.7287 6.62395 5.86408 6.71525 6.01323 6.77778C6.16239 6.84031 6.32241 6.87285 6.48414 6.87354Z"
                    fill="#006CCF"
                  />
                  <path
                    d="M10.8423 10.9318C10.8423 9.98968 11.2791 9.43179 12.1054 9.43179C12.9317 9.43179 13.237 9.9581 13.237 10.9318V14.4476H15.3001V10.2107C15.3001 8.416 14.2791 7.54758 12.8633 7.54758C12.4598 7.54206 12.0616 7.64093 11.7075 7.83458C11.3534 8.02823 11.0554 8.31009 10.8423 8.65284V7.75285H8.85278V14.4476H10.8423V10.9318Z"
                    fill="#006CCF"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-0">
              <a
                href="https://www.youtube.com/channel/UCZl4Cc307IZNlMhmQLayWyw"
                title="Youtube Fatruwal"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                    fill="white"
                  />
                  <path
                    d="M17.016 6.54003C16.9333 6.23855 16.7697 5.96334 16.5416 5.74203C16.3135 5.52072 16.029 5.36111 15.7166 5.27921C14.567 4.98145 9.96838 4.98145 9.96838 4.98145C9.96838 4.98145 5.36495 4.98145 4.22013 5.27921C3.90706 5.36082 3.62178 5.52027 3.39287 5.74156C3.16396 5.96285 2.99947 6.2382 2.9159 6.54003C2.51013 8.81237 2.51013 11.1348 2.9159 13.4071C2.99947 13.7089 3.16396 13.9843 3.39287 14.2056C3.62178 14.4269 3.90706 14.5863 4.22013 14.6679C5.36495 14.9657 9.96838 14.9657 9.96838 14.9657C9.96838 14.9657 14.567 14.9657 15.7166 14.6679C16.029 14.586 16.3135 14.4264 16.5416 14.2051C16.7697 13.9838 16.9333 13.7086 17.016 13.4071C17.4282 11.1353 17.4282 8.81184 17.016 6.54003Z"
                    fill="#006CCF"
                  />
                  <path
                    d="M8.39209 12.3383V7.60889L12.0705 9.97357L8.39209 12.3383Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-4">
        <div className="container mx-auto p-1 lg:max-w-[1320px]">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            {/* Left Section - Mobile Menu & Logo */}
            <div className="flex w-full items-center justify-between px-2 md:w-auto">
              {/* Mobile Menu Button */}
              <div className="mr-[20px] md:hidden">
                <Sidebar links={links} />
              </div>

              <div>
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo Fatruwal"
                    className="w-40 md:w-[180px]"
                  />
                </Link>
              </div>
              <div className="md:hidden">
                <Link to="/">
                  <img src={logo_sgs} alt="Logo Fatruwal" className="w-16" />
                </Link>
              </div>
            </div>

            {/* Right Section - Desktop Navigation & Badge */}
            <div className="hidden text-sm md:flex md:items-center md:space-x-6">
              {/* Desktop Navigation */}
              <nav className="mr-[1.1rem] hidden md:block">
                <ul className="flex space-x-[36px]">
                  {links.map(link =>
                    !link.childrens ? (
                      <li>
                        <Link
                          to={link.path}
                          className="transition-colors hover:text-[#006CCF]"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <div className="flex cursor-pointer items-center transition-colors hover:text-[#006CCF]">
                            Produtos
                            <svg
                              className="ml-1 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-none">
                          <ul className="grid grid-cols-2 py-4">
                            {link.childrens.map((child, index) => (
                              <li
                                data-first-col-of-grid={
                                  Math.round(link.childrens!.length) / 2 > index
                                }
                                className="border-gray-200 data-[first-col-of-grid]:border-l"
                              >
                                <Link
                                  to={child.path}
                                  className="block px-4 py-2 text-sm hover:bg-primary-100 hover:text-[#006CCF]"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ),
                  )}
                </ul>
              </nav>

              {/* Vertical Divider */}
              <div className="hidden h-[3.5rem] w-[1px] bg-primary-800 md:block"></div>

              <div className="pb-1 pr-4 text-center">
                <img
                  src={logo_sgs}
                  alt="Logo SGS"
                  className="h-[3.8rem] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
