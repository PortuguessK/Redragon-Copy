import "./Nav.css";
import { LogoSvg } from "../assets/svg/Icons/Logo/Logo";
import { MoreSvg } from "../assets/svg/Items/More/More";
import { useState } from "react";
import { DarkModeSvg } from "../assets/svg/Items/DarkMode/DarkMode";
import { LightModeSvg } from "../assets/svg/Items/LightMode/LightMode";
import { AccountSvg } from "../assets/svg/Items/Account/Account";
import { ShoppingCartSvg } from "../assets/svg/Items/ShoppingCart/ShoppingCart";
export function Nav() {
  const [Mode, setMode] = useState(false);
  const [Deploy, setDeploy] = useState(false);
  const switchMode = () => {
    setMode(!Mode);
  };
  const toggleDeploy = () => {
    setDeploy(!Deploy);
  };
  const currentMode = Mode ? "Light" : "Dark";
  return (
    <>
      <div className={`Background Bg${currentMode}`}></div>
      <header>
        <nav className={`Nav${currentMode}`}>
          <div className={`LogoContainer Logo${currentMode}`}>
            <LogoSvg />
          </div>
          <div className="MenuContainer">
            <ul className="Menu">
              <li className={`MenuItem`}>
                <div
                  className={`MenuItemTitleContainer ${currentMode} ${
                    Deploy ? "Deploy" : "Deployed"
                  }`}
                  onClick={toggleDeploy}
                >
                  <strong
                    className={`MenuItemTitle Cl${Mode ? `Dark` : `Light`}`}
                  >
                    Keyboard{" "}
                  </strong>
                  <MoreSvg />
                </div>
                <ul className={`MenuItemDeploy`}></ul>
              </li>
              <li className={`MenuItem`}>
                <div
                  className={`MenuItemTitleContainer ${currentMode} ${
                    Deploy ? "Deploy" : "Deployed"
                  }`}
                  onClick={toggleDeploy}
                >
                  <strong
                    className={`MenuItemTitle Cl${Mode ? `Dark` : `Light`}`}
                  >
                    Mouse
                  </strong>
                  <MoreSvg />
                </div>
                <ul className={`MenuItemDeploy`}></ul>
              </li>
              <li className={`MenuItem`}>
                <div
                  className={`MenuItemTitleContainer ${currentMode} ${
                    Deploy ? "Deploy" : "Deployed"
                  }`}
                  onClick={toggleDeploy}
                >
                  <strong
                    className={`MenuItemTitle Cl${Mode ? `Dark` : `Light`}`}
                  >
                    Headset
                  </strong>
                  <MoreSvg />
                </div>
                <ul className={`MenuItemDeploy`}></ul>
              </li>
              <li className={`MenuItem`}>
                <div
                  className={`MenuItemTitleContainer ${currentMode} ${
                    Deploy ? "Deploy" : "Deployed"
                  }`}
                  onClick={toggleDeploy}
                >
                  <strong
                    className={`MenuItemTitle Cl${Mode ? `Dark` : `Light`}`}
                  >
                    Controller
                  </strong>
                  <MoreSvg />
                </div>
                <ul className={`MenuItemDeploy`}></ul>
              </li>
            </ul>
          </div>
          <div className="InfoContainer">
            <div className={`ShoppingCartContainer Mode${currentMode}`}>
              <ShoppingCartSvg/>
            </div>
            <div className={`AccountContainer Mode${currentMode}`}>
              <AccountSvg/>
            </div>
            <div className="ModeContainer">
              <button onClick={switchMode} className={`SwitchMode Stroke${currentMode} Mode${currentMode}`}>
              <LightModeSvg />
              <DarkModeSvg />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
