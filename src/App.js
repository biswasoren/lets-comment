import './App.css';
import data from './data.json';
import { CommentInput } from './Components/CommentBox';
import { CommentList } from './Components/CommentList';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <CommentInput/>
        <CommentList comments={data}/>
        </div>
    </div>
  );
}

export default App;
