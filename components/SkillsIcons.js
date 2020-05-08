import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: "black";
  width: 25px;
`;

const SkillsIcons = () => {
  const icons = [
    "react",
    "js",
    "node-js",
    "python",
    "git",
    "html5",
    "css3",
    "sass",
    "less",
  ];

  return (
    <div className='icon-container'>
      {icons.map((icon, index) => (
        <StyledIcon icon={["fab", icon]} key={index} />
      ))}

      <style jsx>{`
        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default SkillsIcons;
