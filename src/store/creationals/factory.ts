import { IContent, IText } from "../abstractions/IContent";

export const translationFactory = {
  es: {
    factory_section1: `The Factory Pattern provides a way to create objects 
    without specifying the exact class of the object that will be created. 
    Instead of using the <b>new</b> keyword directly in the code, 
    a factory method is used to create the object, allowing 
    for flexibility in which object gets instantiated.`
  },
  en: {
    factory_section1: `El patrón factory provee una manera de crear objetos
    sin especificar la calse exacta de este. En vez de usar la palabra reservada <b>new</b> directamente
    en el código, el método factory es usado para crear el objeto, permitiendonos
    más flexibilidad cuando un objeto es instanciado.`
  }
}

const part1: IText = {
  type: 'Text',
  textIndex: 'factory_section1',
}

export const factoryPatternContent: IContent = {
  sections: [
    part1
  ]
}

