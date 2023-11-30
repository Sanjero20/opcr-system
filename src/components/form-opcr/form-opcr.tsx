import './contents/table.scss';

import Header from './contents/header';
import Guidelines from './contents/guidelines';
import MainTable from './contents/main';

function FormOpcr() {
  return (
    <div id="form-opcr">
      <Header />
      <Guidelines />
      <MainTable />
      {/* Footer */}
    </div>
  );
}

export default FormOpcr;
