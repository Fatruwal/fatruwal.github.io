import React from "react"
import { SocialMedia } from "../SocialMedia"
import { ContactsNumber } from "../ContactsNumber"
const Topbar = () => {
  return (
    <section className="flex max-h-[40px] justify-center bg-primary-700 py-[8px] text-white">
      <div className="mb-[5px] flex items-center lg:w-10/12 lg:max-w-screen-2xl lg:justify-between">
        <ContactsNumber direction="row" />
        <SocialMedia className="hidden lg:flex" />
      </div>
    </section>
  )
}

export default Topbar
