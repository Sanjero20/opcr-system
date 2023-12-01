import OpcrEditPage from '@/pages/head/opcr-edit/opcr-edit';
import OpcrEditSuccessIndicator from '@/pages/head/opcr-edit/opcr-edit-success';
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
  {
    path: '/opcr/edit/:id',
    element: <OpcrEditSuccessIndicator />,
  },
];
