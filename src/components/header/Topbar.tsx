import React from "react"
import { SocialMedia } from "../SocialMedia"
import { ContactsNumber } from "../ContactsNumber"
const Topbar = () => {
  return (
    <section className="max-h-[40px] bg-primary-700 py-[8px] text-white">
      <div className="mx-auto mb-[5px] flex w-10/12 max-w-screen-2xl items-center justify-center px-4 lg:max-w-[1320px] lg:justify-between">
        <ContactsNumber direction="row" />
        <SocialMedia />
      </div>
    </section>
  )
}

export default Topbar
