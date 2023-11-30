import { getCampusList } from '@/services/admin';
import { useQuery } from '@tanstack/react-query';
import { campusColumns } from './table/columns';
import TableCampus from './table/table-campus';

function CampusesPage() {
  const { data: campuses, error } = useQuery({
    queryKey: ['campuses'],
    queryFn: getCampusList,
    initialData: [],
  });

  return (
    <div>
      <TableCampus columns={campusColumns} data={campuses} />
    </div>
  );
}

export default CampusesPage;
