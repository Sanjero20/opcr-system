import styles from './header.module.scss';

function Header() {
  return (
    <thead className="border-t-0 bg-yellow-300 text-center">
      <tr className={styles.trHead}>
        {/* Col 1 */}
        <td rowSpan={2}>
          Major Final Output (MFOs) / <br />
          Programs, Project & Activities (PPAs)
        </td>

        {/* Col 2 */}
        <td rowSpan={2}>
          Success Indicators <br />
          (Targets + Measures )
        </td>

        {/* Col 3*/}
        <td rowSpan={2}>Alloted Budget</td>

        {/* Col 4 */}
        <td rowSpan={2}>
          Divisions / Individuals <br />
          Accountable
        </td>

        {/* Col 5 */}
        <td rowSpan={2}>Actual Accomplishments</td>

        {/* Col 6 */}
        <td colSpan={4}> Rating</td>

        {/* Col 7 */}
        <td rowSpan={2}>Remarks</td>
      </tr>

      <tr className={styles.trRating}>
        <td>
          Q<sup>1</sup>
        </td>
        <td>
          E<sup>2</sup>
        </td>
        <td>
          T<sup>3</sup>
        </td>
        <td>
          A<sup>4</sup>
        </td>
      </tr>
    </thead>
  );
}

export default Header;
