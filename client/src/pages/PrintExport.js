import PrintTeam from './PrintTeam';
import ReactToPrint from 'react-to-print';
import React from 'react'

class PrintExport extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <PrintTeam ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}


export default PrintExport