import './App.scss';
import {Sidebar, Demo}  from './container';

function App() {
  return (
    <div className="layout">
      <Sidebar/>
      {/* <Jina server ="https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search"></Jina> */}
      <Demo />
    </div>
  )
}
export default App;
