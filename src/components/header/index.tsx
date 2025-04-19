import React from "react"
import logo from "@/assets/logo.webp"
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
import BudgetForm from "./budget-form"
import LogoImage from "@/assets/logo"
import BudgetFormIcon from "@/assets/BudgetFormIcon"
import Topbar from "./Topbar"

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
      <Topbar />

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
                  <LogoImage />
                </Link>
              </div>
              <div className="md:hidden">
                <BudgetForm />
              </div>
            </div>

            {/* Right Section - Desktop Navigation & Badge */}
            <div className="hidden text-sm text-primary-900 hover:text-[#0E6ABF] md:flex md:items-center md:space-x-6">
              {/* Desktop Navigation */}
              <nav className="mr-[1.1rem] hidden md:block">
                <ul className="flex space-x-[36px]">
                  {links.map(link =>
                    !link.childrens ? (
                      <li key={link.title}>
                        <Link
                          to={link.path}
                          className="text-primary-900 transition-colors hover:text-[#0E6ABF]"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ) : (
                      <DropdownMenu key={link.title}>
                        <DropdownMenuTrigger>
                          <div className="flex cursor-pointer items-center text-primary-900 transition-colors hover:text-[#0E6ABF]">
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
                                key={child.title}
                                data-first-col-of-grid={
                                  Math.round(link.childrens!.length) / 2 > index
                                }
                                className="border-gray-200 data-[first-col-of-grid]:border-l"
                              >
                                <Link
                                  to={child.path}
                                  className="hover:bg-primary-25 block px-4 py-2 text-sm transition-all hover:font-medium hover:text-primary-300"
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
                <BudgetForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
