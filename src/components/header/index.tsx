import React, { useState } from "react"
import { Link } from "gatsby"
import Sidebar from "./sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { budget } from "../budget-modal"
import LogoImage from "@/assets/logo.webp"
import Topbar from "./Topbar"
import BudgetFormIcon from "@/assets/BudgetFormIcon"
import logoSGS from "@/assets/logo_sgs.png"

export interface HeaderMenuItem {
  path: string
  title: string
  childrens?: HeaderMenuItem[]
}

const Header = ({ menuItems }: { menuItems: HeaderMenuItem[] }) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  )

  const handleDropdownChange = (title: string, isOpen: boolean) => {
    setOpenDropdowns(prev => ({ ...prev, [title]: isOpen }))
  }
  return (
    <header className="shadow-lg">
      <Topbar />
      <section className="flex justify-center py-4">
        <div className="flex w-full flex-wrap items-center justify-between md:flex-nowrap lg:w-10/12 lg:max-w-screen-2xl lg:justify-between">
          {/* Left Section - Mobile Menu & Logo */}
          <div className="mx-auto flex w-10/12 items-center justify-between px-2 lg:w-full lg:px-0">
            {/* Mobile Menu Button */}
            <div className="mr-[20px] lg:hidden">
              <Sidebar links={menuItems} />
            </div>

            <div>
              <Link to="/">
                <img
                  src={LogoImage}
                  alt="Logo"
                  className="h-14 w-auto md:h-16 lg:h-24"
                />
              </Link>
            </div>
            <div className="lg:hidden">
              <budget.Modal>
                <budget.Trigger>
                  <BudgetFormIcon className="mr-1 bg-white md:mr-2" />
                  <div className="flex flex-col items-center justify-center leading-[10px] md:text-sm md:leading-5">
                    <span className="text-xxs font-normal md:text-sm">
                      Solicite um
                    </span>
                    <strong className="text-xxs md:text-sm">Orçamento </strong>
                  </div>
                </budget.Trigger>
              </budget.Modal>
            </div>
          </div>

          {/* Right Section - Desktop Navigation & Badge */}
          <div className="lg:w-screen-2xl hidden text-sm text-primary-900 hover:text-[#0E6ABF] lg:flex lg:items-center lg:space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex w-full space-x-[36px]">
                {menuItems.map(link =>
                  !link.childrens ? (
                    <li key={link.title}>
                      <Link
                        to={link.path}
                        className="text-nowrap text-primary-900 transition-all hover:text-[#0E6ABF]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ) : (
                    <DropdownMenu
                      key={link.title}
                      onOpenChange={isOpen =>
                        handleDropdownChange(link.title, isOpen)
                      }
                    >
                      <DropdownMenuTrigger>
                        <div className="flex cursor-pointer items-center text-primary-900 transition-all hover:text-[#0E6ABF]">
                          {link.title}
                          <svg
                            className={`ml-1 h-4 w-4 transition-transform duration-75 ${
                              openDropdowns[link.title] ? "-rotate-180" : ""
                            }`}
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
                      <DropdownMenuContent className="translate-x-[40%] rounded-sm py-2">
                        <ul className="grid grid-cols-2 py-2">
                          {link.childrens.map((child, index) => (
                            <li
                              key={child.title}
                              data-first-col-of-grid={
                                Math.round(link.childrens!.length) / 2 > index
                              }
                              className="border-gray-200 data-[first-col-of-grid]:border-r"
                            >
                              <Link
                                to={child.path}
                                className="block w-full min-w-36 px-10 py-3 text-xs font-normal text-[#002B53] transition-all hover:bg-primary-25 hover:font-medium hover:text-primary-300"
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
            <div className="hidden h-[48px] w-[1px] md:block"></div>

            <img
              src={logoSGS}
              alt="Logo SGS"
              className="h-8 max-h-14 border-l-primary-500 pl-10 md:h-10 md:border-l-[1px] lg:h-20"
            />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
