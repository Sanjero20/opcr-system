import { useState } from 'react';
import { Plus } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import ModalFooter from '@/components/modal/modal-footer';
import FormCampus from '@/pages/admin/campuses/form/form-campus';

import { useMutation } from '@tanstack/react-query';
import { createCampus } from '@/services/admin';
import { queryClient } from '@/App';

const initialFormData = {
  name: '',
  offices: [{ name: '' }],
};

export type CampusFormType = typeof initialFormData;

function ButtonCampusAdd() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState<CampusFormType>(initialFormData);

  const handleSubmit = useMutation({
    mutationFn: () => createCampus(formData.name, formData.offices),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campuses'] });
      setModalIsOpen(false);
      setFormData(initialFormData);
    },
  });

  return (
    <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <DialogTrigger asChild>
        <Button variant="add">
          Add Campus
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Campus</DialogTitle>
        </DialogHeader>

        <FormCampus formData={formData} setFormData={setFormData} />

        <ModalFooter handleSubmit={() => handleSubmit.mutate()} />
      </DialogContent>
    </Dialog>
  );
}

export default ButtonCampusAdd;
