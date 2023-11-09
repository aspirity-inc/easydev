import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Feedbacks } from './components/Feedbacks/Feedbacks';
import { ProductSection } from './components/ProductSection/ProductSection';
import { RecommendationCarousel } from './components/RecommendationCarousel/RecommendationCarousel';

export const ShoppingPage = () => {
  return (
    <>
      <Breadcrumbs />
      <ProductSection />
      <Feedbacks />
      <RecommendationCarousel />
    </>
  );
};
