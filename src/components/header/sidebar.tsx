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
import BudgetModal from "./budget-modal"
import { FatherLinkTitle } from "./model"
import MenuIcon from "@/assets/MenuIcon"

const Sidebar = ({ links }: { links: FatherLinkTitle[] }) => {
  return (
    <Drawer
      direction="left"
      setBackgroundColorOnScale={false}
      shouldScaleBackground={false}
    >
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent
        style={{ height: "calc(100vh - 40px)" }}
        className="max-w-full lg:hidden"
        overlayDisabled
      >
        <DrawerHeader className="mx-4 flex items-center justify-between border-b py-3">
          <BudgetModal sizeInSmallScreen="medium" />
          <DrawerClose>
            <MdOutlineClose className="text-[1.3rem] text-primary-800" />
          </DrawerClose>
        </DrawerHeader>
        <div>
          <div>
            <nav>
              <ul className="mt-4 space-y-2 text-sm md:text-sm">
                {links.map(link =>
                  !link.childrens ? (
                    <li
                      key={link.title}
                      className="px-6 py-[16px] leading-4 tracking-[0.04rem]"
                    >
                      <Link
                        className="text-primary-900 transition-colors hover:text-primary-300"
                        to={link.path}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ) : (
                    <Accordion key={link.title} type="single" collapsible>
                      <AccordionItem
                        value="item-1"
                        className="w-full data-[state=open]:bg-primary-25"
                      >
                        <AccordionTrigger className="data-[state=open]-text-white px-6 py-4 font-normal text-primary-900 no-underline transition-colors hover:no-underline data-[state=open]:bg-primary-300 data-[state=open]:text-white">
                          {link.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                            {link.childrens!.map(children => (
                              <li key={link.title}>
                                <Link
                                  to={children.path}
                                  className="block text-primary-900 transition-colors hover:text-primary-300"
                                >
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
