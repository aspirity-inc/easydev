import { Flex } from '@aspirity/easydev';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductInfo } from '../ProductInfo/ProductInfo';

export const ProductSection = () => {
  return (
    <Flex gap={74} justify="flex-start" align="flex-start" wrap="nowrap" style={{ marginBottom: 96, width: 1020 }}>
      <ProductCarousel />
      <ProductInfo />
    </Flex>
  );
};
