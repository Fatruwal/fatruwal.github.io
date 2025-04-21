import DOMPurify from "dompurify"

export class HtmlFormat {
  static getFirstParagraph(htmlString: string) {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = DOMPurify.sanitize(htmlString)

    const firstParagraph = tempDiv.querySelector("p")

    if (firstParagraph) {
      let paragraphHtml = firstParagraph.innerHTML

      paragraphHtml = paragraphHtml.replace(
        /<\/?(?:strong|em|b|i|span|a|u|mark|sup|sub|small)(?:\s[^>]*)?>/gi,
        "",
      )
      paragraphHtml = paragraphHtml.replace(/&nbsp;/g, ' ')

      firstParagraph.innerHTML = paragraphHtml
      const text = paragraphHtml.substring(0, 200).trim()
      return text.length > 0 ? text + "..." : ""
    }

    return ""
  }
}
