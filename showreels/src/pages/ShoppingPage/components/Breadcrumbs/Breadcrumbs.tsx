import { Breadcrumbs as EasyBreadcrumbs } from '@easydev';

export const Breadcrumbs = () => {
  return (
    <div className="py-[13px]">
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
