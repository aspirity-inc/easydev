import { AdsPage } from '@src/pages/AdsPage/AdsPage';
import { ShoppingPage } from '@src/pages/ShoppingPage/ShoppingPage';

export const routes = [
  { path: '/showreels/ads', component: <AdsPage />, exact: true },
  { path: '/showreels/shopping', component: <ShoppingPage />, exact: true },
	{ path: '/showreels/tables', component: <ShoppingPage />, exact: true },
	{ path: '/showreels/blog', component: <ShoppingPage />, exact: true },
];
