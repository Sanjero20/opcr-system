import MetaData from './row-1/metadata';
import Title from './row-2/title';
import Introduction from './row-3/introduction';
import Approval from './row-4/approval';
import Director from './row-5/director';

function Header() {
  return (
    <>
      <table>
        <MetaData />

        <tbody>
          <Title />
          <Introduction />
        </tbody>
      </table>

      <table>
        <tbody>
          <Approval />
          <Director />
        </tbody>
      </table>
    </>
  );
}

export default Header;
