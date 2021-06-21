import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  const [isDown_2, setIsDown_2] = useState(false);
  const [isDown_3, setIsDown_3] = useState(false);
  const [isDown_4, setIsDown_4] = useState(false);
  const [isDown_5, setIsDown_5] = useState(false);

  const router = useRouter();

  const navbarNikal = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const dropdownNikal = (n) => {
    switch (n) {
      case 1:
        setIsDown_1(!isDown_1);
        break;
      case 2:
        setIsDown_2(!isDown_2);
        break;
      case 3:
        setIsDown_3(!isDown_3);
        break;
      case 4:
        setIsDown_4(!isDown_4);
        break;
      case 5:
        setIsDown_5(!isDown_5);
        break;
    }
  };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <div className="logo">
            {router.pathname !== "/" ? (
              <Link href="/">
                <a>
                  <img src="IIT_Kharagpur_Logo.svg" /> &thinsp; TSG
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
          <ul>
            <li data-text="about" className="dropdown-title">
              About <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/societies">Societies</Link>
                </li>
                <li>
                  <Link href="/committees">Committees</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className="dropdown-title">
              Results <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <Link href="/gcResults">GC Results</Link>
                </li>
                <li>
                  <Link href="/interIITResults">InterIIT Results</Link>
                </li>
              </ul>
            </li>
            <li data-text="Links" className="dropdown-title">
              Links <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li data-text="Blog">
                  <a href="https://tsgblog.iitkgp.ac.in" target="_blank" rel="noopener noreferrer">
                    TSG Blog &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/Gymkhana_Constitution.pdf" target="_blank" rel="noopener noreferrer">
                    TSG Constitution &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grievance Form &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <Link href="/pastOfficeBearers">Past Office Bearers</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className="dropdown-title">
              Hall of Fame <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <Link href="/tsgAwards">TSG Awards</Link>
                </li>
                <li>
                  <Link href="/achievements">Our Achievements</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className="dropdown-title">
              Contacts <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <Link href="/contacts">Current Office Bearers</Link>
                </li>
                <li>
                  <Link href="/staff">TSG Staff</Link>
                </li>
              </ul>
            </li>
            <li data-text="TSG-Elections">
              <Link href="/elections">TSG Elections</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div className="bar">
          <div className="logo">
            {router.pathname !== "/" ? (
              <Link href="/">
                <a>
                  <img src="IIT_Kharagpur_Logo.svg" />
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className={`mobile-navbar-icon ${isActive ? "out" : "nope"}`} onClick={navbarNikal}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`wrapper ${isActive ? "active" : ""}`}>
          <ul>
            <li
              data-text="About"
              className={`dropdown-title ${isDown_1 ? "down" : ""}`}
              onClick={() => dropdownNikal(1)}
            >
              About {isDown_1 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/societies">Societies</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className={`dropdown-title ${isDown_2 ? "down" : ""}`} onClick={() => dropdownNikal(2)}>
              Results {isDown_2 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li>
                  <Link href="/gcResults">GC Results</Link>
                </li>
                <li>
                  <Link href="/interIITResults">InterIIT Results</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className={`dropdown-title ${isDown_3 ? "down" : ""}`} onClick={() => dropdownNikal(3)}>
              Links {isDown_3 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li data-text="Blog">
                  <a href="https://tsgblog.iitkgp.ac.in" target="_blank" rel="noopener noreferrer">
                    TSG Blog &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/Gymkhana_Constitution.pdf" target="_blank" rel="noopener noreferrer">
                    TSG Constitution &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grievance Form &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <Link href="/pastOfficeBearers">Past Office Bearers</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className={`dropdown-title ${isDown_5 ? "down" : ""}`} onClick={() => dropdownNikal(5)}>
              Hall of Fame {isDown_2 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li>
                  <Link href="/tsgAwards">TSG Awards</Link>
                </li>
                <li>
                  <Link href="/achievements">Our Achievements</Link>
                </li>
              </ul>
            </li>
            <li data-text="GC" className={`dropdown-title ${isDown_4 ? "down" : ""}`} onClick={() => dropdownNikal(4)}>
              Contacts {isDown_4 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li>
                  <Link href="/contacts">Current Office Bearers</Link>
                </li>
                <li>
                  <Link href="/staff">TSG Staff</Link>
                </li>
              </ul>
            </li>
            <li data-text="TSG-Elections">
              <Link href="/elections">TSG Elections</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
