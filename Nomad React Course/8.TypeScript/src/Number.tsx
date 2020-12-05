import React from "react";
import styled from "styled-components";

// styled-Componetns에 존재하지 않는 별도의 내용이 추가될 때도 해당 내용에 대한 인터페이스가 들어가야 한다
const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
  count: number;
}

// props로 넘겨 받는 대상에 대해서도 interface를 통해 처리해줘야 함
const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
