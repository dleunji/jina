import './App.scss';
import {Jina, Sidebar}  from './components';

function App() {
  return (
    <div className="layout">
      <Sidebar/>
      <Jina server ="https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search"></Jina>
    </div>
  );
}

export default App;
