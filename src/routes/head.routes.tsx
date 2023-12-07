import OpcrAddPage from '@/pages/head/opcr-add/opcr-add';
import OpcrEditPage from '@/pages/head/opcr-edit/opcr-edit';
import OpcrEditExistingTarget from '@/pages/head/opcr-edit/opcr-update';
import OpcrPreviewPage from '@/pages/head/opcr-preview/opcr-preview';

export const headRoutes = [
  {
    path: '/opcr',
    element: <OpcrPreviewPage />,
  },
  {
    path: '/opcr/add',
    element: <OpcrAddPage />,
  },
  {
    path: '/opcr/edit',
    element: <OpcrEditPage />,
  },
  {
    path: '/opcr/edit/:id',
    element: <OpcrEditExistingTarget />,
  },
];
