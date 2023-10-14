import styles from './metadata.module.scss';
import Image from 'next/image';

function MetaData() {
  return (
    <thead className={styles.metadata}>
      <tr>
        <td>
          <Image
            width={60}
            height={60}
            src={'/logo.png'}
            alt=""
            className="mx-auto"
          />
        </td>

        <td>
          <p>
            Reference No: BatstateU-DOC-
            <span>AF-02</span>
          </p>
        </td>

        <td>
          <p>
            Effectivity Date: May 12, <span>2022</span>
          </p>
        </td>

        <td>
          <p>
            Revision <span>No.: 01</span>
          </p>
        </td>
      </tr>
    </thead>
  );
}

export default MetaData;
