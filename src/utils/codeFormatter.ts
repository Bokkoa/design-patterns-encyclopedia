import { HLJSApi } from "highlight.js";
import hljs from "highlight.js/lib/core"
import typescript from 'highlight.js/lib/languages/typescript'

// Singleton
export class CodeFormatter {
  
  static #instance: CodeFormatter
  private hljs: HLJSApi

  public static get instance(): CodeFormatter {
    if(!CodeFormatter.#instance){
     CodeFormatter.#instance = new CodeFormatter();
    }

    return CodeFormatter.#instance;
  }

  constructor() {
    this.hljs = hljs
    this.hljs.registerLanguage('typescript', typescript);
  }

  public formatCode(code: string): string{
    return this.hljs.highlight(code, { language: 'typescript' }).value
  }

  public formatElement(el: HTMLElement): void {
    this.hljs.highlightElement(el);
  }

}
