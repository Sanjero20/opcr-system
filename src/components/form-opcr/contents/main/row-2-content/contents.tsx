import React from 'react';
import styles from './contents.module.scss';

import SuccessIndicators from './success-indicators';
import Rating from './rating';

import { useOpcr } from '@/stores/opcr-store';

function Contents() {
  const { targets } = useOpcr();

  console.log(targets);

  return (
    <tbody>
      {targets &&
        targets.map((target, index) => {
          const { name, success } = target;

          return (
            <React.Fragment key={index}>
              {success &&
                success.map((success, index) => (
                  <tr className={styles.content} key={index}>
                    {/* Major Final Output */}
                    {index == 0 ? (
                      <td rowSpan={target.success.length}>{name}</td>
                    ) : null}

                    <SuccessIndicators data={success} />

                    <Rating rating={target.success[index].rating} />

                    {/* Remarks */}
                    <td>
                      <textarea
                        name=""
                        id=""
                        className="h-full resize-none"
                        disabled
                      />
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
