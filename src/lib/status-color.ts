import { OPCR_Status } from '@/types/opcr.types';
import { cn } from './utils';

export function getStatusColor(status: OPCR_Status) {
  const styles = cn(
    status === 'rejected' && 'text-red-400',
    status === 'in progress' && 'text-yellow-400',
    status === 'calibrating' && 'text-green-400',
    status === 'calibrated' && 'text-green-700',
    'capitalize font-bold',
  );

  return styles;
}

export function getNumberColor(progress: number) {
  let styles = '';

  switch (true) {
    case progress >= 0 && progress <= 25:
      styles = 'text-red-400';
      break;
    case progress >= 26 && progress <= 50:
      styles = 'text-orange-400';
      break;
    case progress >= 51 && progress <= 75:
      styles = 'text-yellow-400';
      break;
    case progress >= 76 && progress <= 99:
      styles = 'text-green-400';
      break;
    case progress == 100:
      styles = 'text-green-600';
      break;
    default:
      styles = '';
  }

  return styles;
}
