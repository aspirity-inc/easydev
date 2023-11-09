import { Title } from '@aspirity/easydev';
import { ClientTable } from '@src/pages/AdsPage/components/ClientTable/ClientTable';

export const ClientStatistics = () => {
  return (
    <section style={{ marginBottom: 72, maxWidth: 1020 }}>
      <Title variant="h3" style={{ marginBottom: 48 }}>
        My client’s statistics
      </Title>
      <ClientTable />
    </section>
  );
};
