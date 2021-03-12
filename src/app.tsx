import { render } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
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
  useEffect(onClickUpdate, [])

  return (
    <div>
      <canvas width={Canvas.Width} height={Canvas.Height} ref={canvasRef}></canvas>
      <br />
      中心のx座標:<input type="number" value={x} onInput={e => setState({ x:  Number.parseFloat((e.target as HTMLInputElement).value), y, expansionRate })}></input>
      中心のy座標:<input type="number" value={y} onInput={e => setState({ y:  Number.parseFloat((e.target as HTMLInputElement).value), x, expansionRate })} ></input>
      拡大率:<input type="number" value={expansionRate} onInput={e => setState({ expansionRate:  Number.parseFloat((e.target as HTMLInputElement).value), x, y })}></input>
      <button onClick={onClickUpdate}>更新</button>
    </div>
  )
}
  
render(
  <App />,
  document.getElementById("app")!
)
