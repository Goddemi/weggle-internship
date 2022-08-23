import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const SearchInfo = props => {
  const { onChange } = props;
  return (
    <S.SearchInfo>
      {SEARCH_DATA.map(data => {
        const { id, codeName, name } = data;

        return (
          <S.SearchTable key={id}>
            <S.TableTitle>{name}</S.TableTitle>
            <S.TableContent name={codeName} onChange={onChange} />
          </S.SearchTable>
        );
      })}
    </S.SearchInfo>
  );
};

export default SearchInfo;

const SEARCH_DATA = [
  {
    id: 1,
    codeName: 'productName',
    name: '상품명검색',
  },
  {
    id: 2,
    codeName: 'productCategory',
    name: '상품 카테고리',
  },
  {
    id: 3,
    codeName: 'productDate',
    name: '상품등록일',
  },
  {
    id: 4,
    codeName: 'productStatus',
    name: '판매상태',
  },
];

// style 컴포넌트
const S = {};
S.SearchInfo = styled.div`
  margin: 0 30px 0 30px;
  width: 100%;
`;
S.SearchTable = styled.div`
  display: flex;
  border: 1px solid #dadada;
`;

S.TableTitle = styled.div`
  ${variables.flex()}
  width: 150px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1c1c1e;
  background: #eaeaea;
`;

S.TableContent = styled.input`
  ${variables.flex()}
  width:100%;
  height: 60px;
  text-indent: 10px;
  border-style: none;
`;
