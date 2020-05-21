import React from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/Projects", label: "Projects" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Navigation = () => (
  <div>
    <input type='checkbox' className='toggle' />
    <div className='hamburger'>
      <div></div>
    </div>
    <nav className='nav'>
      <div>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    <style jsx>{`
      .toggle {
        position: absolute;
        top: 6px;
        left: 6px;
        z-index: 2;
        cursor: pointer;
        width: 60px;
        height: 60px;
        opacity: 0;
      }
      .hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 50px;
        height: 50px;
        padding: 1rem;
        background-color: white;
      }
      .hamburger div {
        position: relative;
        width: 100%;
        height: 4px;
        background-color: black;
        display: flex;
        justify-content: center;
        transition: all 0.5s ease;
      }

      .hamburger div:before {
        content: "";
        position: absolute;
        z-index: 1;
        top: -12px;
        width: 100%;
        height: 4px;
        background-color: black;
      }

      .hamburger div:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 12px;
        width: 100%;
        height: 4px;
        background-color: black;
      }

      .toggle:checked + .hamburger > div {
        transform: rotate(135deg);
      }

      .toggle:checked + .hamburger > div:before {
        top: 0;
        transform: rotate(90deg);
      }

      .toggle:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);
      }
      .nav {
        text-align: center;
        background-color: white;
        padding: 0 1.5em;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      .nav > ul {
        padding: 4px 16px;
      }
      .nav ul li {
        display: flex;
        padding: 6px 8px;
      }
      .nav ul li a {
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
      }

      @media (min-width: 600px) {
        .toggle,
        .hamburger {
          display: none;
        }
      }
      @media (max-width: 600px) {
        .toggle {
          z-index: 22;
        }
        .hamburger {
          z-index: 21;
        }
        .nav {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100vh;
          visibility: hidden;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          background-color: rgba(255, 255, 255, 0.95);
        }
        .nav > div {
          width: 50vw;
          height: 200vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav > div > ul {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          visibility: hidden;
          opacity: 0;
        }
        .nav > div > ul li {
          margin: 2em 0;
        }
        .nav > div > ul li a {
          font-size: 3rem;
        }

        .toggle:checked ~ .nav {
          visibility: visible;
          width: 80%;
          transition: width 0.5s ease-in-out;
        }
        .toggle:checked ~ .nav > div ul {
          transition: visibility: 1s, opacity 1.5s linear;
          visibility: visible;
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default Navigation;
