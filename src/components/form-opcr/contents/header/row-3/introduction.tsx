import styles from './intro.module.scss';

function Introduction() {
  return (
    <tr>
      <td colSpan={4} className={styles.td}>
        <div className={styles.container}>
          <p>
            I, POUL ISAAC C. DE CHAVEZ, Asst. Director for Management and
            Information System, commit to deliver and agree to be rated on the
            attainment of the targets in accordance with the indicated measures
            for the period of January to June 2023
          </p>

          <div className={styles.signature}>
            <p>Unit Head</p>
            <p>Date: </p>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Introduction;
