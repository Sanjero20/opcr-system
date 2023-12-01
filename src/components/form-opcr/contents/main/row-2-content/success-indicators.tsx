import { SuccessIndicator } from '@/types/opcr.types';

interface SuccessIndicatorProps {
  data: SuccessIndicator;
}

function SuccessIndicators({ data }: SuccessIndicatorProps) {
  return (
    <>
      {/* Key Success Indicators */}
      <td>
        <pre>{data.indicator}</pre>
      </td>

      {/* Alloted Budget */}
      <td>{data.budget || ''}</td>

      {/* Division/Individual Accountable  */}
      <td>{data.division}</td>

      {/* Actual Accomplishment */}
      <td>{data.accomplishment}</td>
    </>
  );
}

export default SuccessIndicators;
