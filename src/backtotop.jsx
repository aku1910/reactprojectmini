import React from "react";
import BackToUp from '@uiw/react-back-to-top';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 500px; /* Set width to 500px */
  height: 500px; /* Set height to 500px */
`;

export default function BackToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <BackToUp className="text-blue-500" onClick={handleScrollToTop}>↑</BackToUp>
    </Wrapper>
  );
}
