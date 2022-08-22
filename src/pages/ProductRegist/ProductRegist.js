import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import variables from '../../styles/variables';
import Category from './Category/Category';
import Price from './Price/Price';

const ProductRegist = () => {
  return (
    <Container>
      <PageLocation>홈 - 상품관리 - 상품등록 </PageLocation>
      <PageTitle> 상품등록 </PageTitle>
      <RegisterContainer>
        <Category />

        <ProductName>
          <RegisterTitle title="상품명" />
          <NameContent>
            <input placeholder="상품명의 정확한 정보만 입력해주세요. (최소 10자)" />
          </NameContent>
        </ProductName>

        <Price />

        <Option>
          <RegisterTitle title="옵션" />
          <OptionContent />
        </Option>

        <ImgUpload>
          <RegisterTitle title="상품이미지" />
          <ImgContent />
        </ImgUpload>

        <VideoUpload>
          <RegisterTitle title="배송비" />
          <VideoContent />
        </VideoUpload>

        <DeliveryPrice>
          <RegisterTitle title="반품/교환비" />
          <DeliveryContent />
        </DeliveryPrice>

        <Detail>
          <RegisterTitle title="상품상세 정보" />
          <DetailContent />
        </Detail>

        <ExchangeRule>
          <RegisterTitle title="교환/반품 정책" />
          <ExchangeContent />
        </ExchangeRule>
      </RegisterContainer>
      <Category>hi</Category>;
    </Container>
  );
};

export default ProductRegist;

const Container = styled.div`
  background-color: ${props => props.theme.backgroundGray};
  padding: 50px;
`;

const PageLocation = styled.div``;

const PageTitle = styled.div``;

const RegisterContainer = styled.div`
  > div {
    margin-bottom: 20px;
    background-color: #ffffff;
  }
`;
const CategoryContent = styled.div`
  ${variables.registerBox}
  display: flex;
  align-items: center;
  padding-left: 30px;
  border: 1px solid #dadada;
  background-color: #ffffff;
`;

const ProductName = styled.div``;

const NameContent = styled.div`
  ${variables.registerBox}

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

const Option = styled.div``;

const OptionContent = styled(CategoryContent)``;

const ImgUpload = styled.div``;

const ImgContent = styled(CategoryContent)``;

const VideoUpload = styled.div``;

const VideoContent = styled(CategoryContent)``;

const DeliveryPrice = styled.div``;

const DeliveryContent = styled(CategoryContent)``;

const Detail = styled.div``;

const DetailContent = styled(CategoryContent)``;

const ExchangeRule = styled.div``;

const ExchangeContent = styled(CategoryContent)``;
