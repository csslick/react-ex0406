// 외부 모듈에서 값(기능) 가져오기
import { name, sayName } from '../modules/MyModule';

// 컴퍼넌트 만들기
function Box() {
    const result = sayName("wow!");
    console.log(result);
    return (
      <>
        <h1>title</h1>
        <div className='box'>
          box {name}
          
        </div>
      </>
    )
}

export default Box;