import TableOutput from './table-output';
import TableRating from './table-rating';

function Guidelines() {
  return (
    <table className="">
      <tbody>
        <tr>
          <td
            className="flex flex-wrap items-center justify-center gap-8 pl-12"
            style={{ borderTop: 0, borderBottom: 0 }}
          >
            <TableRating />
            <TableOutput />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Guidelines;
