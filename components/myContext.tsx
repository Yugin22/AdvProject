// MyContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

// Step 1.1: Define the context type, if needed
type MyContextType = string | null;

// Step 1.2: Create the context with a default value (null here)
const MyContext = createContext<MyContextType>(null);

// Step 2.1: Define the props type for the provider
interface MyProviderProps {
    children: ReactNode; // This will accept any valid React node(s)
}

// Step 2.2: Define the provider component
export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const value = "Hello, world!"; // This is the value for the context
  
    // Step 2.3: Use MyContext.Provider to wrap children with the context
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Step 3.1: Define a custom hook for consuming the context
export const useMyContext = () => {
    const context = useContext(MyContext);
  
    // Step 3.2: Error handling if context is not within a provider
    if (context === null) {
      throw new Error("useMyContext must be used within a MyProvider");
    }
  
    return context;
};

export { MyContext };
