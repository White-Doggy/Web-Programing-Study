import React from "react";
import styled from "styled-components";

// 로딩중 빈화면이 나오는 것을 막기 위해 별도의 컴포넌트를 생성하고 로딩 중에 호출하도록 함

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      ⏰
    </span>
  </Container>
);
