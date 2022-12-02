import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

import { Export } from './Export';

const PrintExport = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Export ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default PrintExport;