import Header from './row-1/header';
import Contents from './row-2-content/contents';
import TableBr from './row-3/table-br';

function MainTable() {
  return (
    <table>
      <Header />
      <Contents />
      <TableBr />
    </table>
  );
}

export default MainTable;
