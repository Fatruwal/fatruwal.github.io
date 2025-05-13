import { Buffer } from "buffer"
const credentials = Buffer.from(
  `${process.env.GATSBY_WP_USERNAME}:${process.env.GATSBY_WP_APP_PASSWORD}`,
).toString("base64")

export class ContactForm {
  static async newsletter(email: string) {
    try {
      const formId = "48"
      const formData = new FormData()
      formData.append("newsletter", email)
      formData.append("_wpcf7_unit_tag", formId)

      const request = await fetch(
        `${process.env.GATSBY_WP_API_URL}/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      )
      const response = await request.json()
      return response
    } catch (error) {
      throw error
    }
  }

  static async downloadCatalog(
    name: string,
    company: string,
    email: string,
    phone: string,
  ) {
    try {
      const formId = "294"
      const formData = new FormData()
      formData.append("your-name", name)
      formData.append("company", company)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("_wpcf7_unit_tag", formId)

      const request = await fetch(
        `${process.env.GATSBY_WP_API_URL}/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      )
      const response = await request.json()

      if (!request.ok) {
        throw new Error(response)
      }

      return response
    } catch (error) {
      throw error
    }
  }

  static async budget(
    name: string,
    company: string,
    email: string,
    phone: string,
    message: string,
  ) {
    try {
      const formId = "47"
      const formData = new FormData()
      formData.append("your-name", name)
      formData.append("company", company)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("message", message)
      formData.append("_wpcf7_unit_tag", formId)

      const request = await fetch(
        `${process.env.GATSBY_WP_API_URL}/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      )
      const response = await request.json()

      if (!request.ok) {
        throw new Error(response)
      }

      return response
    } catch (error) {
      throw error
    }
  }

  static async listForms() {
    try {
      const request = await fetch(
        `${process.env.GATSBY_WP_API_URL}/contact-form-7/v1/contact-forms`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      )
      const response = await request.json()

      if (!request.ok) {
        throw new Error(response)
      }

      return response
    } catch (error) {
      throw error
    }
  }
}
