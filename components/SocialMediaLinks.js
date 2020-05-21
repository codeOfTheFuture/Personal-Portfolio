import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: lightgrey;
  width: 50px;
  cursor: pointer;
  box-shadow: 0 0 0 2px whitesmoke;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    color: red;
    width: 55px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 0.5em;
  }
`;

const SocialMediaLinks = () => {
  return (
    <div className='links-container'>
      <a href='https://github.com/codeOfTheFuture' target='_blank'>
        <StyledIcon icon={["fab", "github-square"]} />
      </a>
      <a href='' target='_blank'>
        <StyledIcon icon={["fa", "envelope-square"]} />
      </a>
      <a
        href='https://www.linkedin.com/in/jeffrey-oliver-353260160/'
        target='_blank'
      >
        <StyledIcon icon={["fab", "linkedin"]} />
      </a>
      <style jsx>{`
        .links-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 20%;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaLinks;
