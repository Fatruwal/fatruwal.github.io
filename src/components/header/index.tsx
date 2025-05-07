import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Sidebar from "./sidebar"
import { FatherLinkTitle } from "./model"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import BudgetModal from "../budget-modal"
import LogoImage from "@/assets/logo"
import Topbar from "./Topbar"
import BudgetFormIcon from "@/assets/BudgetFormIcon"

interface MenuQueryData {
  allWpMenuItem: {
    nodes: Array<{
      label: string
      path: string
      childItems: {
        nodes: Array<{
          label: string
          path: string
        }>
      }
    }>
  }
}

const Header: React.FC = () => {
  const data = useStaticQuery<MenuQueryData>(graphql`
    query HeaderMenuQuery {
      allWpMenuItem(
        filter: {
          menu: { node: { name: { eq: "header-menu" } } }
          parentId: { eq: null }
        }
        sort: { order: ASC }
      ) {
        nodes {
          label
          path
          childItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
  `)
  const menuItems: FatherLinkTitle[] = data.allWpMenuItem.nodes.map(item => ({
    path: item.path || "/",
    title: item.label,
    childrens:
      item.childItems.nodes.length > 0
        ? item.childItems.nodes.map(child => ({
            path: child.path || "/",
            title: child.label,
          }))
        : undefined,
  }))

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
                <LogoImage />
              </Link>
            </div>
            <div className="lg:hidden">
              <BudgetModal>
                <BudgetFormIcon className="mr-1 bg-white md:mr-2" />
                <div className="flex flex-col items-center justify-center leading-[10px] md:text-sm md:leading-5">
                  <span className="text-xxs font-normal md:text-sm">
                    Solicite um
                  </span>
                  <strong className="text-xxs md:text-sm">Orçamento </strong>
                </div>
              </BudgetModal>
            </div>
          </div>

          {/* Right Section - Desktop Navigation & Badge */}
          <div className="lg:w-screen-2xl hidden text-sm text-primary-900 hover:text-[#0E6ABF] lg:flex lg:items-center lg:space-x-6">
            {/* Desktop Navigation */}
            <nav className="mr-[1.1rem] hidden lg:block">
              <ul className="flex w-full space-x-[36px]">
                {menuItems.map(link =>
                  !link.childrens ? (
                    <li key={link.title}>
                      <Link
                        to={link.path}
                        className="text-nowrap text-primary-900 transition-colors hover:text-[#0E6ABF]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ) : (
                    <DropdownMenu key={link.title}>
                      <DropdownMenuTrigger>
                        <div className="flex cursor-pointer items-center text-primary-900 transition-colors hover:text-[#0E6ABF]">
                          {link.title}
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
                                className="block px-4 py-2 text-sm transition-all hover:bg-primary-25 hover:font-medium hover:text-primary-300"
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
            <div className="hidden h-[3.5rem] w-[1px] bg-primary-500 md:block"></div>

            <div className="pb-1 pr-4 text-center lg:pr-0">
              <BudgetModal>
                <BudgetFormIcon className="mr-1 bg-white md:mr-2" />
                <div className="flex flex-col items-center justify-center leading-[10px] md:text-sm md:leading-5">
                  <span className="text-xxs font-normal md:text-sm">
                    Solicite um
                  </span>
                  <strong className="text-xxs md:text-sm">Orçamento </strong>
                </div>
              </BudgetModal>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
