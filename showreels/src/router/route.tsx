import { AdsPage } from '@src/pages/AdsPage/AdsPage';
import { BlogPage } from '@src/pages/BlogPage/BlogPage';
import { ShoppingPage } from '@src/pages/ShoppingPage/ShoppingPage';
import { TablesPage } from '@src/pages/TablesPage/TablesPage';

export const routes = [
  { path: '/showreels/ads', component: <AdsPage />, exact: true },
  { path: '/showreels/shopping', component: <ShoppingPage />, exact: true },
  { path: '/showreels/tables', component: <TablesPage />, exact: true },
  { path: '/showreels/blog', component: <BlogPage />, exact: true },
];
