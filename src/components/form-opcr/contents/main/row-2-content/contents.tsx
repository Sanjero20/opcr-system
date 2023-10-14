import styles from './contents.module.scss';

function Contents() {
  return (
    <tbody>
      {/* Sample row*/}
      <tr className={styles.content}>
        <td>Major Output </td>

        {/* Key Success Indicators */}
        <td>
          <pre>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            omnis similique consequuntur quaerat. Quas impedit at hic libero vel
            corporis aliquam et obcaecati aut, ipsam saepe minus eaque
            perferendis ad!
          </pre>
        </td>

        {/* Alloted Budget */}
        <td></td>

        {/* Division/Individual Accountable  */}
        <td></td>

        {/* Actual Accomplishment */}
        <td></td>

        {/* Rating */}
        <td />
        <td />
        <td />
        <td />

        {/* Remarks */}
        <td>
          <textarea name="" id="" className="h-full resize-none" disabled />
        </td>
      </tr>
      {/* Sample End */}
    </tbody>
  );
}

export default Contents;
