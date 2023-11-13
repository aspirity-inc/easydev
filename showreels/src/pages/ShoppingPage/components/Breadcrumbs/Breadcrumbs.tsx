import { Breadcrumbs as EasyBreadcrumbs } from '@aspirity/easydev';

export const Breadcrumbs = () => {
  return (
    <div style={{ paddingLeft: 13, paddingRight: 13, marginBottom: 13 }}>
      <EasyBreadcrumbs
        items={[
          {
            title: 'Clothes',
          },
          {
            title: 'Woman clothes',
          },
          {
            title: 'Woman top',
          },
          {
            title: 'Tops',
          },
        ]}
      />
    </div>
  );
};
