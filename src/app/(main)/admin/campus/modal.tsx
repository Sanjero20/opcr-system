'use client';

import { ChangeEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X, Plus } from 'lucide-react';

import { v4 as uuid } from 'uuid';
import { createCampus } from '@/services/api/admin';

type Office = {
  id: string;
  name: string;
};

export function ButtonAddCampus() {
  const [campusName, setCampusName] = useState('');
  const [offices, setOffices] = useState<Office[]>([]);
  const [temp, setTemp] = useState('');

  const addOffice = (value = '') => {
    const newOffice = {
      id: uuid(),
      name: value,
    };

    if (offices.length === 0) {
      setOffices([newOffice, { id: uuid(), name: '' }]);
      setTemp('');
      return;
    }

    setOffices([...offices, newOffice]);
  };

  const removeOffice = (id: string) => {
    const newOffices = offices.filter((office) => office.id !== id);
    setOffices(newOffices);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const value = e.target.value;
    const newOffices = offices.map((office) => {
      if (office.id === id) {
        return {
          id,
          name: value,
        };
      }
      return office;
    });

    setOffices(newOffices);
  };

  const handleSubmit = async () => {
    const response = await createCampus(campusName, offices);
    console.log(response);
  };

  return (
    <Dialog>
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

        <div className="flex flex-col gap-4">
          <Input
            className="w-full"
            value={campusName}
            onChange={(e) => setCampusName(e.target.value)}
            placeholder="Campus name"
          />
          <Separator />
          <div className="flex w-full flex-col gap-1">
            <h2 className="font-bold text-gray-700">Offices</h2>
            {offices.length > 0 && (
              <>
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className="items-ecnter relative flex items-center"
                  >
                    <Input
                      value={office.name}
                      onChange={(e) => handleChange(e, office.id)}
                    />

                    <X
                      className="absolute right-2 cursor-pointer text-zinc-300"
                      onClick={() => removeOffice(office.id)}
                    />
                  </div>
                ))}
              </>
            )}

            {offices.length === 0 && (
              <Input value={temp} onChange={(e) => setTemp(e.target.value)} />
            )}
          </div>

          <Button onClick={() => addOffice(temp)}>Add</Button>
        </div>

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
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
