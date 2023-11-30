import OpcrEditPage from '@/pages/head/opcr-edit/opcr-edit';
import OpcrPreviewPage from '@/pages/head/opcr-preview/opcr-preview';

export const headRoutes = [
  {
    path: '/opcr',
    element: <OpcrPreviewPage />,
  },
  {
    path: '/opcr/edit',
    element: <OpcrEditPage />,
  },
];
