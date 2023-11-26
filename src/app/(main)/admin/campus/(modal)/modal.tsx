'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

import CampusForm from './form';
import { useMutation } from '@tanstack/react-query';
import { createCampus } from '@/services/api/admin';
import { queryClient } from '@/components/query-wrapper';
import { Campus } from '@/types/data-types';

export type CampusFormType = Omit<Campus, '_id'>;

const initialFormData: CampusFormType = {
  name: '',
  offices: [{ name: '', head: '', opcr: [] }],
  pmt: [],
};

export function ButtonAddCampus() {
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
          <DialogTitle>Add Campus</DialogTitle>
        </DialogHeader>

        <CampusForm formData={formData} setFormData={setFormData} />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="w-1/2" variant="outline">
              Close
            </Button>
          </DialogClose>

          <Button
            type="submit"
            className="w-1/2"
            variant="add"
            onClick={() => handleSubmit.mutate()}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
