import React, { useState } from 'react';


interface IPosition {
  x: number,
  y: number,
  active: boolean
}

const Class = () => {

  const [position, setPosition] = useState<IPosition>({x:1, y:2, active: false});

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    const a = e.currentTarget.getBoundingClientRect();
    console.log(e.movementX + ' ' + e.movementY);
    setPosition({x:  position.x + e.movementX, y: position.y + e.movementY, active: true});
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (position.active) {
      console.log('move');
      const a = e.currentTarget.getBoundingClientRect();
      setPosition({x:  position.x + e.movementX, y: position.y + e.movementY, active: true});
    } else {
      console.log('not move');
    }
  }

  function handlePointerUp(e: React.PointerEvent<SVGSVGElement>) {
    const a = e.currentTarget.getBoundingClientRect();
    console.log('end');
    setPosition({x:  position.x + e.movementX, y: position.y + e.movementY, active: false});
  }


  return (
    <svg width={'100%'}  fill="#ff0000" onMouseLeave={handlePointerUp}  onMouseMove={handlePointerMove}>
      <svg x={position.x} y={position.y} 
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}>
        <rect width="50" height="50" fill="green"/>
      </svg>
    </svg>
  );
};

export default Class;