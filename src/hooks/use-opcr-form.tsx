import { ChangeEvent, useState } from 'react';
import { SuccessIndicator } from '@/types/opcr.types';

const initialSuccessIndicator: SuccessIndicator = {
  accomplishment: '',
  assigned_to: [''],
  budget: 0,
  division: '',
  indicator: '',
  rating: [0, 0, 0, 0],
  remarks: [''],
};

interface useOpcrFormProps {
  name: string;
  indicators?: SuccessIndicator[];
}

function useOpcrForm({ name, indicators }: useOpcrFormProps) {
  const [targetName, setTargetName] = useState(name);
  const [targetIndicators, setTargetIndicators] = useState(
    indicators || [initialSuccessIndicator],
  );

  // Target Name handler
  const handleTargetName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTargetName(value);
  };

  // Target Indicator handlers
  const addTargetIndicator = () => {
    setTargetIndicators([...targetIndicators, initialSuccessIndicator]);
  };

  const deleteTargetIndicator = (index: number) => {
    const updatedTargets = [...targetIndicators];
    updatedTargets.splice(index, 1);
    setTargetIndicators(updatedTargets);
  };

  const handleTargetIndicator = (
    e: ChangeEvent<HTMLInputElement>,
    indicatorIndex: number,
  ) => {
    const { name, value } = e.target;
    const updatedTargets = targetIndicators.map((data, index) => {
      if (index === indicatorIndex) {
        return {
          ...data,
          [name]: value,
        };
      }
      return data;
    });

    setTargetIndicators(updatedTargets);
  };

  const handleTargetIndicatorRating = (
    ratingValues: number[],
    indicatorIndex: number,
  ) => {
    const updatedTargets = targetIndicators.map((data, index) => {
      if (index === indicatorIndex) {
        return {
          ...data,
          rating: ratingValues,
        };
      }
      return data;
    });

    setTargetIndicators(updatedTargets);
  };

  return {
    targetName,
    setTargetName,
    targetIndicators,
    setTargetIndicators,
    handleTargetName,
    addTargetIndicator,
    deleteTargetIndicator,
    handleTargetIndicator,
    handleTargetIndicatorRating,
  };
}

export default useOpcrForm;
