import { BestArticles } from './components/BestArticles';
import { FooterCarousel } from './components/FooterCarousel';
import { FreshBlogs } from './components/FreshBlogs';
import './custom.css';

export const BlogPage = () => {
  return (
    <>
      <BestArticles />
      <FreshBlogs />
      <FooterCarousel />
    </>
  );
};
