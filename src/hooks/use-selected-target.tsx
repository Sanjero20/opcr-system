import { ChangeEvent, useEffect, useState } from 'react';
import { useOpcr, initialSuccessIndicator } from '@/stores/opcr-store';
import { Target } from '@/types/opcr.types';

function useSelectedTarget(targetId: string | undefined) {
  const [target, setTarget] = useState<Target>();
  const { targets } = useOpcr();

  // Get the matching target based on the id
  useEffect(() => {
    if (!targetId) return;
    const target = targets.filter((target) => target._id.$oid === targetId)[0];
    setTarget(target);
  }, [targetId]);

  const handleTargetName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!target) return;

    const value = e.target.value;
    const updatedTarget = { ...target, name: value };
    setTarget(updatedTarget);
  };

  const handleSuccessIndicator = (
    e: ChangeEvent<HTMLInputElement>,
    indicatorIndex: number,
  ) => {
    if (!target) return;

    const { name, value } = e.target;

    const indicators = target.success;
    const updatedIndicators = indicators.map((data, index) => {
      if (index === indicatorIndex) {
        return {
          ...data,
          [name]: value,
        };
      }

      return data;
    });

    setTarget({ ...target, success: updatedIndicators });
  };

  const addSuccessIndicator = () => {
    if (!target) return;

    const updatedIndicators = [...target.success, initialSuccessIndicator];
    setTarget({ ...target, success: updatedIndicators });
  };

  const deleteSuccessIndicator = (indicatorIndex: number) => {
    if (!target) return;

    const indicators = target.success;
    const updatedIndicators = indicators.filter(
      (value, index) => index !== indicatorIndex,
    );

    setTarget({ ...target, success: updatedIndicators });
  };

  const handleSuccessRating = (ratings: number[], indicatorIndex: number) => {
    if (!target) return;

    const indicators = target.success;
    const updatedList = indicators.map((values, index) => {
      if (index === indicatorIndex) {
        return {
          ...values,
          rating: ratings,
        };
      }
      return values;
    });

    setTarget({ ...target, success: updatedList });
  };

  return {
    target,
    setTarget,
    handleTargetName,
    handleSuccessIndicator,
    addSuccessIndicator,
    deleteSuccessIndicator,
    handleSuccessRating,
  };
}

export default useSelectedTarget;
