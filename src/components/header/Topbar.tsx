import React from "react"
import { SocialMedia } from "../SocialMedia"
import { ContactComponent } from "../ContactComponent"
const Topbar = () => {
  return (
    <section className="flex max-h-[40px] justify-center bg-primary-700 py-[8px] text-white">
      <div className="mb-[5px] flex items-center lg:w-10/12 lg:max-w-screen-2xl lg:justify-between">
        <div className="flex gap-4">
          <ContactComponent.Whatsapp size="sm" />
          <ContactComponent.Phone size="sm" />
        </div>
        <SocialMedia className="hidden lg:flex" />
      </div>
    </section>
  )
}

export default Topbar
