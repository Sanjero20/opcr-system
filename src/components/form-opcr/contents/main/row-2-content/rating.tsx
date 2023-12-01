import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number[];
}

function Rating({ rating }: RatingProps) {
  return (
    <>
      {rating.map((value, index) => (
        <td key={index} className={cn(value === 0 ? '' : 'bg-yellow-300/80')} />
      ))}
    </>
  );
}

export default Rating;
