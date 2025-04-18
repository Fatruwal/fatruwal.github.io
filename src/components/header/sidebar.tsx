import { Link } from "gatsby"
import { MdOutlineClose } from "react-icons/md"
import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerClose,
} from "../ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import BudgetForm from "./budget-form"
import { FatherLinkTitle } from "./model"

const Sidebar = ({ links }: { links: FatherLinkTitle[] }) => {
  return (
    <Drawer
      direction="left"
      setBackgroundColorOnScale={false}
      shouldScaleBackground={false}
    >
      <DrawerTrigger>
        <svg
          className="h-6 w-6 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </DrawerTrigger>
      <DrawerContent
        style={{ height: "calc(100vh - 40px)" }}
        className="max-w-full md:hidden"
        overlayDisabled
      >
        <DrawerHeader className="mx-4 flex items-center justify-between border-b py-3">
          <BudgetForm />
          <DrawerClose>
            <MdOutlineClose className="text-[1.3rem] text-primary-800" />
          </DrawerClose>
        </DrawerHeader>
        <div>
          <div>
            <nav>
              <ul className="mt-4 space-y-2 text-sm text-primary-900 md:text-sm">
                {links.map(link =>
                  !link.childrens ? (
                    <li className="px-6 py-[16px] leading-4 tracking-[0.04rem]">
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  ) : (
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value="item-1"
                        className="w-full data-[state=open]:bg-primary-100"
                      >
                        <AccordionTrigger className="px-6 py-4 font-normal no-underline hover:no-underline data-[state=open]:bg-primary-300 data-[state=open]:text-white">
                          {link.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                            {link.childrens!.map(children => (
                              <li>
                                <Link to={children.path} className="block">
                                  {children.title}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ),
                )}
              </ul>
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
