import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 3px 6px;
`;

export const List = styled.ul`
  width: ${props => props.width ? props.width : '100%'};
  padding: 0;
  margin: 0;
`;

export const StripedList = styled(List)`
  ${ListItem}:nth-child(odd) {
    background-color: #e8a2e8;
  }
`;
