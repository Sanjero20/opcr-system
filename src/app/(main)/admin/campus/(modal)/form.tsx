import { SetStateAction } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { CampusFormType } from './modal';

import { Office } from '@/types/data-types';

interface CampusFormProps {
  formData: CampusFormType;
  setFormData: React.Dispatch<SetStateAction<CampusFormType>>;
}

function CampusForm({ formData, setFormData }: CampusFormProps) {
  const handleCampusChange = (event: any) => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };

  const handleOfficeChange = (index: number, event: any) => {
    const updatedOffices = [...formData.offices];
    updatedOffices[index] = {
      ...updatedOffices[index],
      name: event.target.value,
    };

    setFormData({
      ...formData,
      offices: updatedOffices,
    });
  };

  const addOfficeInput = () => {
    setFormData({
      ...formData,
      offices: [...formData.offices, { name: '', head: '', opcr: [] }], // Add a new empty office input box
    });
  };

  const deleteOfficeInput = (index: number) => {
    const updatedOffices = [...formData.offices];
    updatedOffices.splice(index, 1); // Remove the office at the specified index

    setFormData({
      ...formData,
      offices: updatedOffices,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Input type="text" value={formData.name} onChange={handleCampusChange} />

      <h2 className="">Offices:</h2>

      {formData.offices.map((office: Office, index: number) => (
        <div key={index} className="relative flex items-center">
          <Input
            type="text"
            value={office.name}
            onChange={(event) => handleOfficeChange(index, event)}
          />

          <X
            type="button"
            className="absolute right-1 text-zinc-400"
            onClick={() => deleteOfficeInput(index)}
          />
        </div>
      ))}

      <Button type="button" onClick={addOfficeInput}>
        Add Office
      </Button>
    </div>
  );
}

export default CampusForm;
