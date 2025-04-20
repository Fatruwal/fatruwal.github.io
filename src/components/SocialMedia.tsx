import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
export const SocialMedia = () => {
  return (
    <ul className="mb-0 hidden items-center space-x-2 lg:flex">
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.facebook.com/Fatruwal/?locale=pt_BR"
          title="Facebook Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="color-primary-500 text-sm" />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.instagram.com/fatruwal.vedacoes/"
          title="Instagram Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="color-primary-500 text-sm" />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.linkedin.com/company/fatruwalfabricandosolucoes/"
          title="Linkedin Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="color-primary-500 text-sm" />
        </a>
      </li>
      <li className="rounded-full border-4 bg-white">
        <a
          href="https://www.youtube.com/channel/UCZl4Cc307IZNlMhmQLayWyw"
          title="Youtube Fatruwal"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="color-primary-500 text-sm" />
        </a>
      </li>
    </ul>
  )
}
