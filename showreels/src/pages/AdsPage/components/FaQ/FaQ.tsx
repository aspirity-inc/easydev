import { Title } from '@aspirity/easydev';
import { FaqAccordion } from '@src/pages/AdsPage/components/FaqAccordion/FaqAccordion';

export const FaQ = () => {
  return (
    <section style={{ maxWidth: 1020 }}>
      <Title style={{ marginBottom: 48 }} variant="h3">
        FaQ
      </Title>
      <FaqAccordion />
    </section>
  );
};
