// import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import ColorBox from './components/ColorBox';
import CSSModule from './components/CSSModule';
import Image from './components/Image';

function App() {
  let name = "hello";
  let data = [
    { name: 'lee', age: 30},
    { name: 'kim', age: 40}
  ];

  const 함수 = () => {
    alert('함수실행');
  }

  return (
    <div className="App">
      <h1>{name} master작업중</h1>
      <Image />
      <CSSModule />
      
      <ColorBox />
      {/* 외부 함수 호출 */}
      <button onClick={함수}>Button</button>

      {/* 안에다 함수 작성(익명함수) */}
      <button onClick={() => {
        alert('클릭했어요~');
      }}>Button</button>
      
      <p>0: name: {data[0].name}, age: {data[0].age}</p>
      <Box />
      <Box />

    </div>
  );
}

export default App;
