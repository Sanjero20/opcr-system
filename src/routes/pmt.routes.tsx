import CampusOfficesPage from '@/pages/pmt/offices';
import ViewOfficeOPCR from '@/pages/pmt/offices/view-office-opcr';

export const pmtRoutes = [
  {
    path: '/offices',
    element: <CampusOfficesPage />,
  },
  {
    path: '/offices/:id',
    element: <ViewOfficeOPCR />,
  },
];
