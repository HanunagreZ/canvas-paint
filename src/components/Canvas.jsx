import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import '../styles/canvas.scss';

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    console.log(canvasRef.current);
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
});

export default Canvas;