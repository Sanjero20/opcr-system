import TableOutput from './table-output';
import TableRating from './table-rating';

function Guidelines() {
  return (
    <table className="">
      <tbody>
        <tr>
          <td className="flex flex-wrap items-center justify-center gap-8 border-t-0 pl-12">
            <TableRating />
            <TableOutput />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Guidelines;
