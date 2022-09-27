import styled from 'styled-components';

const S = {};

S.SearchTableBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  background-color: ${({ theme: { style } }) => style.white};
  border: 1px solid ${({ theme: { style } }) => style.lineGray};
  width: 90%;
  padding: 10px;
`;

S.SearchTable = styled.table`
  width: 100%;
  height: 100%;
  border: 1.1px solid ${({ theme: { style } }) => style.black};
  text-align: center;
  th:nth-child(${props => props.colHoverNthChild}),
  td:nth-child(${props => props.colHoverNthChild}),
  tbody tr:hover {
    background: #ddd;
  }
`;

S.TableTr = styled.tr`
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
`;

S.TableTd = styled.td`
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
  vertical-align: middle;
`;

S.TableTh = styled.th`
  background-color: ${({ theme: { style } }) => style.lineGray};
  width: 150px;
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
  vertical-align: middle;
`;

S.InputBox = styled.input`
  border: none;
  outline: none;
`;

S.TableTap = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
  vertical-align: middle;
`;

// 주문번호/시각

S.orderDateBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
`;

// order span styled

S.OrderSpan = styled.span`
  margin: 5px 0;
`;

S.OrderGraySpan = styled(S.OrderSpan)`
  color: gray;
`;

//pageNation btn

S.PageBtnBox = styled.div`
  ${({ theme: { variables } }) => variables.flex()}
`;

S.PageBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 15px;
  margin: 15px 10px;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[aria-current] {
    background-color: ${({ theme: { style } }) => style.hotpinnk};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default S;
