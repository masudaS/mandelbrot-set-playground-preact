import { render } from "preact";
import { useRef, useState } from "preact/hooks";
import { renderMBSet } from "./lib";

const Canvas = {
  Width: 800,
  Height: 800
}

const initialState = {
  x: 0, y: 0, expansionRate: 400
}

const App = () => {
  const [{ x, y, expansionRate }, setState] = useState(initialState);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClickUpdate = () => {
    const ctx = canvasRef.current.getContext("2d")!;
    renderMBSet(ctx, { x, y }, expansionRate);
  }

  return (
    <div>
      <canvas width={Canvas.Width} height={Canvas.Height} ref={canvasRef}></canvas>
      <br />
      中心のx座標:<input type="number" value={x}></input>
      中心のy座標:<input type="number" value={y}></input>
      拡大率:<input type="number" value={expansionRate}></input>
      <button onClick={onClickUpdate}>更新</button>
    </div>
  )
}
  
render(
  <App />,
  document.getElementById("app")!
)
