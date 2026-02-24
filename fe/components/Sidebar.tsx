import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLayout } from "./layouts/LayoutContext";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(true);          // desktop

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
    document.documentElement.classList.toggle('layout-menu-expanded');
  };


  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* SIDEBAR */}
      <aside
        id="layout-menu"
        className={`layout-menu menu-vertical menu
          ${isOpen ? "" : "collapsed"}
        `}
      >
        <div className="app-brand">
          <Link to="/" className="app-brand-link">
            <span className="app-brand-text fw-bold">SAKU</span>
          </Link>
          {/* Toggle desktop */}
          <button
            onClick={handleToggle}
            className="layout-menu-toggle d-none d-xl-flex"
          >
            ☰
          </button>
        </div>

        <ul className="menu-inner">
          <li className={`menu-item ${isActive("/") ? "active" : ""}`}>
            <Link to="/" className="menu-link">Dashboard</Link>
          </li>

          <li className={`menu-item ${isActive("/transaksi") ? "active" : ""}`}>
            <Link to="/transaksi" className="menu-link">Transaksi Saya</Link>
          </li>

          <li className={`menu-item ${isActive("/laporan/bulanan") ? "active" : ""}`}>
            <Link to="/laporan/bulanan" className="menu-link">Laporan Bulanan</Link>
          </li>

          <li className={`menu-item ${isActive("/pengaturan/saku") ? "active" : ""}`}>
            <Link to="/pengaturan/saku" className="menu-link">Saku</Link>
          </li>

          <li className={`menu-item ${isActive("/pengaturan/kategori") ? "active" : ""}`}>
            <Link to="/pengaturan/kategori" className="menu-link">Kategori</Link>
          </li>
        </ul>
      </aside>

    
      {/* HAMBURGER MOBILE */}
      <div className="menu-mobile-toggler d-xl-none">
        <a href="#"  onClick={handleToggle} className="menu-hamburger">
          ☰z
        </a>
      </div>
    </>
  );
};

export default Sidebar;