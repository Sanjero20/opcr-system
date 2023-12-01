import React from 'react';
import { SuccessIndicator } from '@/types/opcr.types';

interface SuccessIndicatorProps {
  data: SuccessIndicator[];
}

function SuccessIndicators({ data }: SuccessIndicatorProps) {
  return (
    <>
      {data &&
        data.map((data, index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))}
    </>
  );
}

export default SuccessIndicators;
