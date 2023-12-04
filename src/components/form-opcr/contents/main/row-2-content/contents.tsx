import React from 'react';

import SuccessIndicators from './success-indicators';
import Rating from './rating';

import { useOpcr } from '@/stores/opcr-store';
import { getCookie } from '@/lib/cookie';
import { Permission } from '@/types';
import EditableTextArea from './textarea-remarks';

function Contents() {
  const { targets } = useOpcr();
  const permission = getCookie('permission') as Permission;

  return (
    <tbody>
      {targets &&
        targets.map((target, index) => {
          const { name, success } = target;

          return (
            <React.Fragment key={index}>
              {success &&
                success.map((success, index) => (
                  <tr key={index}>
                    {/* Major Final Output */}
                    {index == 0 ? (
                      <td rowSpan={target.success.length}>{name}</td>
                    ) : null}

                    <SuccessIndicators data={success} />

                    <Rating rating={target.success[index].rating} />

                    {/* Remarks */}
                    <td>
                      {permission === 'pmt' && success._id ? (
                        <EditableTextArea />
                      ) : (
                        <ul className="h-100" style={{ minHeight: 50 }}>
                          {target.success[index].remarks.map((value, index) => (
                            <li key={index}>{value}</li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          );
        })}
      {/* Sample End */}
    </tbody>
  );
}

export default Contents;
