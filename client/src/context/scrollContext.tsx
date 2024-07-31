import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext({})

interface ScrollProviderProps {
    children: React.ReactNode;
}
export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [scroll, setScroll] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Obtiene la posición de scroll vertical
            if (scrollPosition > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <ScrollContext.Provider value={{scroll}}>{children}</ScrollContext.Provider>
}
