/*
After clicking on the button, pie diagram and exchange rate will be presented for 5 seconds. the button disabled until the diagram and  exchange rate disappear.
The values in the children components is updated when clicking on the diagram.
The components are communicate with rxjs.
*/

import react, { useState } from 'react';
import Diagram from './diagram';
import Exchange from './exchange';

function Container1() {
  const [showDiagram, setShowDiagram] = useState(false);

  const handleClick = () => {
    setShowDiagram(true);
    setTimeout(function () {
      setShowDiagram(false);
    }, 5000)
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-4   justify-content-center">
        <button type=" button" className="btn col-2" onClick={e => handleClick()} disabled={showDiagram}>
          Show Diagram
        </button>
      </div>
      <div className="row">
        <div className="col-sm">
          {showDiagram && (<Diagram></Diagram>)}
        </div>
        <div className="col-sm">
          {showDiagram && <Exchange></Exchange>}
        </div>
      </div>
    </div>
  );
}

export default Container1;
