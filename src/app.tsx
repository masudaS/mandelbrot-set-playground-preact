import { render } from "preact";

const Canvas = {
  Width: 800,
  Height: 800
}

const App = () => (
  <div>
    <canvas width={Canvas.Width} height={Canvas.Height}></canvas>
    <br />
    中心のx座標:<input type="number" value={0}></input>
    中心のy座標:<input type="number" value={0}></input>
    拡大率:<input  type="number" value={400}></input>
    <button>更新</button>
  </div>
)

render(
  <App />,
  document.getElementById("app")!
)
