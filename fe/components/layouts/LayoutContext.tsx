import React, { createContext, useContext, useState } from "react";

interface LayoutContextType {
    isMobileOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileOpen(false);

    return (
        <LayoutContext.Provider
            value={{ isMobileOpen, toggleMobileMenu, closeMobileMenu }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const ctx = useContext(LayoutContext);
    if (!ctx) throw new Error("useLayout must be used inside LayoutProvider");
    return ctx;
};