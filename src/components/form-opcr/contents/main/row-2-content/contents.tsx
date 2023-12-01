import { useOpcr } from '@/stores/opcr-store';
import styles from './contents.module.scss';
import SuccessIndicators from './success-indicators';
import Rating from './rating';

function Contents() {
  const { targets } = useOpcr();

  return (
    <tbody>
      {targets &&
        targets.map((target, index) => (
          <tr className={styles.content} key={index}>
            {/* Major Final Output */}
            <td>{target.name}</td>

            <SuccessIndicators data={target.success} />
            <Rating rating={target.success[index].rating} />

            {/* Remarks */}
            <td>
              <textarea name="" id="" className="h-full resize-none" disabled />
            </td>
          </tr>
        ))}
      {/* Sample End */}
    </tbody>
  );
}

export default Contents;
