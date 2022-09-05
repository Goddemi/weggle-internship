import React from 'react';
import styled from 'styled-components';

import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import variables from '../../../styles/variables';

import { useDispatch } from 'react-redux';
import { registName } from '../../../store';

const ProductName = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(registName(event.target.value));
  };

  return (
    <NameContainer>
      <RegisterTitle title="상품명" />
      <NameContent>
        <input
          placeholder="상품명의 정확한 정보만 입력해 주세요. (최소 10자)"
          onBlur={handleChange}
        />
      </NameContent>
    </NameContainer>
  );
};

export default ProductName;

const NameContainer = styled.div``;

const NameContent = styled.div`
  ${variables.registerBox}

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;
