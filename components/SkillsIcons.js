import React from "react";
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
  const icons = [
    "react",
    "js",
    "node-js",
    // "python",
    // "git",
    // "html5",
    // "css3",
    // "sass",
    // "less",
  ];

  return (
    <div className='icon-container'>
      {icons.map((icon, index) => (
        <>
          <StyledIcon icon={["fab", icon]} key={index} />
          <p>{icon}</p>
        </>
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
