// import logo from './logo.svg';
import './App.css';
import Box from './components/Box';

function App() {
  let name = "hello";
  let data = [
    { name: 'lee', age: 30},
    { name: 'kim', age: 40}
  ];

  return (
    <div className="App">
      <h1>{name} react app</h1>
      <p>0: name: {data[0].name}, age: {data[0].age}</p>
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default App;
