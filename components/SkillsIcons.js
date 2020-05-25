import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: "black";
  width: 50px;
  margin: 0.5em 4em;

  @media only screen and (max-width: 600px) {
    margin: 0 0.4em;
  }
`;

const SkillsIcons = () => {
  const [icons] = useState([
    "react",
    "js",
    "node-js",
    "python",
    "git",
    "html5",
    "css3",
    "sass",
    "less",
  ]);

  const [firstIcon, setFirstIcon] = useState(0);
  const [secondIcon, setSecondIcon] = useState(1);
  const [thirdIcon, setThirdIcon] = useState(2);
  const [iconList, setIconList] = useState([
    icons[firstIcon],
    icons[secondIcon],
    icons[thirdIcon],
  ]);

  useEffect(() => {
    setTimeout(() => {
      cycleIcons();
    }, 3000);
  }, [iconList]);

  const cycleIcons = () => {
    if (thirdIcon < icons.length - 1) {
      setFirstIcon(firstIcon + 1);
      setSecondIcon(secondIcon + 1);
      setThirdIcon(thirdIcon + 1);
    }

    if (thirdIcon === icons.length - 1) {
      setFirstIcon(icons.length - 2);
      setSecondIcon(icons.length - 1);
      setThirdIcon(0);
    }

    if (thirdIcon === 0) {
      setFirstIcon(icons.length - 1);
      setSecondIcon(0);
      setThirdIcon(1);
    }

    if (thirdIcon === 1) {
      setFirstIcon(0);
      setSecondIcon(1);
      setThirdIcon(2);
    }

    setIconList([icons[firstIcon], icons[secondIcon], icons[thirdIcon]]);
  };

  return (
    <div className='icon-container'>
      {iconList.map((icon, index) => (
        <div className='icon'>
          <StyledIcon icon={["fab", icon]} key={index} />
          <p>{icon}</p>
        </div>
      ))}

      <style jsx>{`
        .icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 20%;
          margin-left: 2em;
        }
        .icon {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .icon-container p {
          text-transform: uppercase;
        }
        @media only screen and (max-width: 600px) {
          .icon-container {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsIcons;
