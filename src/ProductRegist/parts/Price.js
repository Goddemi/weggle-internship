import React, { useState } from 'react';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import PriceInput from '../../components/PriceInput/PriceInput';
import RegisterToggle from '../../components/RegisterToggle/RegisterToggle';
import variables from '../../styles/variables';

const Price = ({ data, setData }) => {
  const [discountBtn, setDiscountBtn] = useState('web');

  const handleDiscount = (event, newAlignment) => {
    setDiscountBtn(newAlignment);
  };

  const [measure, setMeasure] = useState('원');

  const handleMeasure = e => {
    setMeasure(e.target.value);
  };

  const [productPrice, setProductPrice] = useState(0);

  const handlePrice = e => {
    setProductPrice(e.target.value);
    setData({ ...data, price_original: e.target.value });
  };

  const [discountPrice, setDiscountPrice] = useState(0);

  const handleDiscountPrice = e => {
    setDiscountPrice(e.target.value);
    setData({ ...data, price_discount: data.price_original - e.target.value });
  };

  const totalPrice =
    measure === '원'
      ? {
          finalPrice: Math.round((productPrice - discountPrice) / 10) * 10,
          finalDiscount: Math.round(discountPrice / 10) * 10,
        }
      : {
          finalPrice:
            Math.round(
              (productPrice - (productPrice * discountPrice) / 100) / 10
            ) * 10,
          finalDiscount:
            Math.round((productPrice * discountPrice) / 100 / 10) * 10,
        };

  return (
    <PriceContainer>
      <RegisterTitle title="판매가" />
      <PriceInput
        title="판매가"
        priceHandler={e => {
          handlePrice(e);
        }}
      />
      <Discount>
        <span>할인</span>
        <RegisterToggle
          className="toggle"
          value={discountBtn}
          handler={handleDiscount}
          toggleValue="discount"
        />
      </Discount>
      {discountBtn === 'discount' && (
        <DiscountContainer>
          <DiscountInput>
            <span>할인 설정</span>
            <input
              onChange={e => {
                handleDiscountPrice(e);
              }}
            />
            <select onChange={handleMeasure}>
              <option value="원">원</option>
              <option value="%">%</option>
            </select>
          </DiscountInput>

          <DiscountPrice>
            <span>할인된 가격</span>
            <div>
              총{totalPrice.finalPrice.toLocaleString()}원 (
              {totalPrice.finalDiscount.toLocaleString()}원 할인된 가격)
            </div>
          </DiscountPrice>
        </DiscountContainer>
      )}
    </PriceContainer>
  );
};

export default Price;

const PriceContainer = styled.div`
  span {
    ${variables.subMenuTitle}
  }
`;

const Discount = styled.div`
  ${variables.registerBox}
  border-top: 0;

  span {
    &:last-child {
      width: 120px;
    }
  }
`;

const DiscountContainer = styled.div``;

const DiscountPrice = styled.div`
  ${variables.registerBox}
  border-top: none;
`;

const DiscountInput = styled.div`
  ${variables.registerBox}
  border-bottom: none;

  > input {
    width: 200px;
    height: 100%;
    background-color: ${props => props.theme.backgroundGray};
    border: 1px solid ${props => props.theme.lineGray};
    outline: none;
  }

  > select {
    height: 27px;
    line-height: 28px;
    padding: 1px 10px;
    border: 1px solid ${props => props.theme.lineGray};
    border-left: none;
    background-color: ${props => props.theme.backgroundGray};
    font-size: 13px;
  }
`;
