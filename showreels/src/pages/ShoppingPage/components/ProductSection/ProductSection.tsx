import { Flex } from '@easydev';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductInfo } from '../ProductInfo/ProductInfo';

export const ProductSection = () => {
  return (
    <Flex
      gap={74}
      justify="flex-start"
      align="flex-start"
      wrap="nowrap"
      className="mb-[96px]"
    >
      <ProductCarousel />
      <ProductInfo />
    </Flex>
  );
};
