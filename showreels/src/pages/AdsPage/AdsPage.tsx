import { AdsSection } from '@src/pages/AdsPage/components/AdsSection/AdsSection';
import { PromptCarousel } from '@src/pages/AdsPage/components/PromptCarousel/PromptCarousel';
import { ClientStatistics } from './components/ClientStatistics/ClientStatistics';
import { FaQ } from './components/FaQ/FaQ';
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo';

export const AdsPage = () => {
  return (
    <>
      <ProfileInfo />
      <AdsSection />
      <ClientStatistics />
      <PromptCarousel />
      <FaQ /> 
    </>
  );
};
