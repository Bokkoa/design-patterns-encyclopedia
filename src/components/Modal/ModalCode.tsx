import 'highlight.js/styles/qtcreator-dark.min.css';

import { FC, useEffect, useRef } from "react";
import { CodeFormatter } from "../../utils/codeFormatter";

interface ICodeProps {
  children: string
  description: string;
}

export const Code: FC<ICodeProps> = ({ children, description }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      CodeFormatter.instance.formatElement(codeRef.current);
    }
  }, [children])

  return (
    <>
      <h2>{description}</h2>
      <pre
        className={`
      `}
      >
        <code ref={codeRef} className="language-typescript rounded">
          {children}
        </code>
      </pre>
    </>

  )
}
