export interface IContent {
  sections: (ICode | IText )[]
}

export interface ICode extends ISection {
  code: string
}

export interface IText extends ISection {
  textIndex: string
}

// interface ITranslation {
//   [key: string]: string
// }

interface ISection {
  type: 'Code' | 'Text'
}