import React from 'react'

export default function ColorBox() {
    const style = {
        backgroundColor: 'orange',
        color: 'white',
        border: '2px solid red',
    }
  return (
    <>
        {/* 인라인 스타일 */}
        <div style={
            { 
                color: "red",
                fontSize: "30px"
            }
        }>ColorBox</div>
        {/* 변수값으로 스타일 적용 */}
        <p style={style}>변수값으로 스타일 적용</p>
    </>
  )
}
