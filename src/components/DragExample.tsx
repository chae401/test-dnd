import React, { useState } from 'react';
import Boundary from './Boundary';
import Box from './Box';

export default function DragExample() {
  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="p-20">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Drag</h1>
        <span>without bounce</span>
      </div>

      <Boundary>
        <Box
          style={{ left: x, top: y }}
          // style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          onMouseDown={(e) => {
            const initX = e.screenX;
            const initY = e.screenY;

            const mouseMoveHandler = (e: MouseEvent) => {
              setPosition({
                x: x + e.screenX - initX,
                y: y + e.screenY - initY,
              });
            };
            const mouseUpHandler = (e: MouseEvent) => {
              document.removeEventListener('mousemove', mouseMoveHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler, { once: true });
          }}
        ></Box>
      </Boundary>
    </div>
  );
}
