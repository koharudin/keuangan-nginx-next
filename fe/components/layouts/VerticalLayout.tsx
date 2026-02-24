import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom'
import { LayoutProvider } from "./LayoutContext";

interface VerticalLayoutProps {
    children: React.ReactNode;
}

const VerticalLayout: React.FC<VerticalLayoutProps> = ({ children }) => {
    return (
        <LayoutProvider>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    {/* Menu */}
                    <Sidebar />
                    {/* / Menu */}

                    {/* Layout page */}
                    <div className="layout-page">
                        <Navbar />

                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            <Outlet />

                            <Footer />

                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>

                <div className="layout-overlay layout-menu-toggle"></div>
                <div className="drag-target"></div>
            </div>
        </LayoutProvider>
    );
};

export default VerticalLayout;
