import React from 'react'
// 모듈 css(컴포넌트 전용)
import myStyle from '../components/CSSModule.module.css'

function CSSModule() {
  return (
    <div>
        <div className='bgOrange'>App.css</div>
        <div 
            className={myStyle.bgOrange}
        >CSSModule.module.css</div>
    </div>
  )
}

export default CSSModule