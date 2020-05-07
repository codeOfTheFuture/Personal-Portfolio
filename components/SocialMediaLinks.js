import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 50px;
  cursor: pointer;
  padding: 0 1em;
`;

const SocialMediaLinks = () => {
  return (
    <div>
      <a href='https://github.com/codeOfTheFuture' target='_blank'>
        <StyledIcon icon={["fab", "github-square"]} />
      </a>
      <a
        href='https://www.linkedin.com/in/jeffrey-oliver-353260160/'
        target='_blank'
      >
        <StyledIcon icon={["fab", "linkedin"]} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
