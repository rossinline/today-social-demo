import { createContext, useContext, useState } from "react";

// Define the context type
interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
}

// Create the context
const ColorContext = createContext<ColorContextType | undefined>(undefined);

// Create a provider component
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<string>("");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the ColorContext
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
