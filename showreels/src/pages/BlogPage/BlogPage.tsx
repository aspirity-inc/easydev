import { BestArticles } from './components/BestArticles';
import { FooterCarousel } from './components/FooterCarousel';
import { FreshBlogs } from './components/FreshBlogs';

export const BlogPage = () => {
  return (
    <>
      <BestArticles />
      <FreshBlogs />
      <FooterCarousel />
    </>
  );
};
