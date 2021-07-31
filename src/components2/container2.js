/*
After clicking on the button, pie diagram and exchange rate will be presented for 5 seconds.
The values in the children components is updated when clicking on the button.
*/

import react, { useState } from 'react';
import Diagram from './diagram';
import Exchange from './exchange';

function Container2() {
  const [showDiagram, setShowDiagram] = useState(false);
  const [clicked, setClicked] = useState(0);


  const handleClick = () => {
    if (!showDiagram) {
      setShowDiagram(true);
      setTimeout(function () {
        setShowDiagram(false);
      }, 5000)
    }

    setClicked(clicked + 1);

  }

  return (
    <div className="container">
      <div className="row mt-5 mb-4   justify-content-center">
          <button type=" button" className="btn col-2" onClick={e => handleClick()} >
            Show Diagram
          </button>
      </div>

      <div className="row">
        <div className="col-sm">
          {showDiagram && (<Diagram clicked={clicked}></Diagram>)}

        </div>

        <div className="col-sm">
          {showDiagram && <Exchange clicked={clicked}></Exchange>}

        </div>

      </div>

    </div>
  );
}

export default Container2;
