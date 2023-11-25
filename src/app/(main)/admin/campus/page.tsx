import { getCampusList } from '@/services/api/admin';
import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';

async function CampusPage() {
  const campusList = await getCampusList();

  console.log(campusList);

  return (
    <div>
      <DataTable columns={columns} data={campusList.data} />
    </div>
  );
}

export default CampusPage;
