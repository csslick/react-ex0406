import React from 'react'

export default function ColorBox() {
    const style = {
        backgroundColor: 'orange',
        color: 'white',
        border: '2px solid red',
    }

    const btnStyle = {
        backgroundColor: "#4caf50",
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        TextDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
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
        <button style={btnStyle}>Button style</button><br />
    </>
  )
}
