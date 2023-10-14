import styles from './approval.module.scss';

function Approval() {
  return (
    <>
      <tr>
        <td colSpan={3} className={styles.approval}>
          Approved By:
        </td>
        <td className={styles.date}>Date</td>
      </tr>

      <tr className={styles.empty}>
        <td colSpan={3} />
        <td />
      </tr>
    </>
  );
}

export default Approval;
