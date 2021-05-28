import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './Components/Join/join';
import Chat from './Components/Chat/chat';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Join}/>
      <Route path='/chat' component={Chat}/>
    </Router>
  );
}

export default App;
