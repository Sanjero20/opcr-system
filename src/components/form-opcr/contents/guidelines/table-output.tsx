import styles from './table.module.scss';

function TableOutput() {
  return (
    <table className={styles.table}>
      <tbody>
        {/* Row 1  */}
        <tr>
          <td colSpan={4}>Equivalent weight Output</td>
        </tr>

        {/* Row 2 */}
        <tr>
          <td>Functions</td>
          <td>Administrative/Strategic/Core</td>
          <td>Instruction</td>
          <td>Total</td>
        </tr>

        {/* Row 3 */}
        <tr>
          <td>Weight</td>
          <td></td>
          <td></td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableOutput;
