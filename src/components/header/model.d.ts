type LinkTitle = {
  path: string
  title: string
}

export type FatherLinkTitle = {
  childrens?: LinkTitle[]
} & LinkTitle
