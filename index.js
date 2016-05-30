
import React from 'react';
import {render} from 'react-dom';
import Reactable from 'reactable';

var unsafe = Reactable.unsafe;
import agentii from './agentii';

var Table = Reactable.Table;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: agentii
    };
  }

  render() {
    return (
      <div>
        <h1 className='title'>Lista agentiilor turistice din Romania</h1> 
        <Table 
          ref={(ref) => this._dataTable = ref}
          className='table'
          cellPadding='0'
          cellSpacing='0'
          border='0'
          data={this.state.tableData}
          noDataText={"NO DATA"}
          columns={[
            {key: 'dataEmiterii', label: 'Data emit.'},
            {key: 'denumireaAgentiei', label: 'Agentie'},
            {key: 'adresaSediuAgentie', label: 'Adresa'},
            {key: 'localitate', label: 'Oras'},
            {key: 'siteWebHref', label: 'Website'},
            {key: 'nrPolitaAsig', label: 'Asigurare nr.'},
            {key: 'termenValabilitate', label: 'Valabila'}
          ]}
          sortable={true}
          filterable={['denumireaAgentiei', 'adresaSediuAgentie', 'localitate']}
          filterPlaceholder={'Cauta dupa denumire, sediu sau localitate'}
          previousPageLabel={'<'}
          nextPageLabel={'>'}
          itemsPerPage={10}
          pageButtonLimit={10} />
      </div>
    )
  }
}

render(<App/>, document.querySelector('.app'));