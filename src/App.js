import './App.css';
import DataFetching  from './components/DataFetching';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <DataFetching />
      </ErrorBoundary>
    </div>
  );
}

export default App;
