import TableOffices from './table/table-office';
import { officeColumns } from './table/columns';

import { useQuery } from '@tanstack/react-query';
import { getOffices } from '@/services/pmt';

function CampusOfficesPage() {
  const { data: pmtOffices, error } = useQuery({
    queryKey: ['pmt-offices'],
    queryFn: getOffices,
    initialData: [],
  });

  return (
    <div className="container">
      <h1 className="title">OFFICES AND DEPARTMENTS</h1>

      <TableOffices data={pmtOffices} columns={officeColumns} />
    </div>
  );
}

export default CampusOfficesPage;
