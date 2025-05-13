export class PhoneFormat {
  static formatPhoneNumber(phone: string): string {
    const value = phone.replace(/\D/g, "")
    let formattedValue = ""
    if (value.length <= 2) {
      formattedValue = value
    } else if (value.length <= 7) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } else {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    }
    return formattedValue
  }
}
