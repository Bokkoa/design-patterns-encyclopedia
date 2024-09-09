import { ScrollControlsState } from "@react-three/drei";
import { createContext, useState } from "react";

export interface ScrollContextType {
  scrollRef: ScrollControlsState | null
  setScrollRef: (scroll: ScrollControlsState) => void
}


export const ScrollContext = createContext<ScrollContextType | null>(null);

const ScrollProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [scroll, setScroll] = useState<ScrollControlsState | null>(null)

  const setScrollRef = (scroll: ScrollControlsState) => {
    setScroll(scroll)
  };

  return (
    <ScrollContext.Provider value={{ scrollRef: scroll, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;

