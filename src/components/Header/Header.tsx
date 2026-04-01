import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Vehicle Variables", path: "/variables" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;

      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `.${styles.link}[href="${location.pathname}"]`,
      );

      setIndicatorStyle(
        activeLink
          ? { width: activeLink.offsetWidth, left: activeLink.offsetLeft }
          : { width: 0, left: 0 },
      );
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <nav className={styles.nav} ref={navRef}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.name}
            </NavLink>
          ))}
          <span
            className={styles.indicator}
            style={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
