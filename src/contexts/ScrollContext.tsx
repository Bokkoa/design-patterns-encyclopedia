import { createContext, useState } from "react";

export interface ScrollContextType {
  scrollRef: number | null
  setScrollRef: (scroll: number) => void
}


export const ScrollContext = createContext<ScrollContextType | null>(null);

const ScrollProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [scrollOffset, setScrollOffset] = useState<number | null>(0)

  const setScrollRef = (scrollOffset: number) => {
    setScrollOffset(scrollOffset)
  };

  return (
    <ScrollContext.Provider value={{ scrollRef: scrollOffset, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;

