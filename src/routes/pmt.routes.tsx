import CampusOfficesPage from '@/pages/pmt/offices';

export const pmtRoutes = [
  {
    path: '/offices',
    element: <CampusOfficesPage />,
  },
  {
    path: '/offices/:opcrId',
    element: <>Display opcr form of a office</>,
  },
];
