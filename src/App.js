import './App.scss';
import {Sidebar, CrossModal}  from './components';

function App() {
  return (
    <div className="layout">
      <Sidebar className="sidebar"/>
      {/* <Jina server ="https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search"></Jina> */}
      <CrossModal></CrossModal>
    </div>
  )
}
export default App;
