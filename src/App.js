import './App.css';
import React, { useState } from 'react';
export default App;

function App() {
  const [textList, setTextList] = useState([]);

  // stateを変える関数　　addとdelete
  function addState(text){
    setTextList((textList)=>{
        return [...textList,text];
    });
  }
  function deleteState(index){
    setTextList((textList)=>{
      const newTextList = [...textList];
      newTextList.splice(index,1);
      return newTextList;
    })
  }
  return (
    <div className="App">
        <From addState={addState}/>
        <ContentList textList={textList} deleteState={deleteState}/>
    </div>
  );
}

// 入力欄と追加ボタン
function From(props){
  const [text, setText] = useState("");

  const add_text = ()=>{
    if(text!=''){
      props.addState(text);
      setText('');
    }
  }
  return(
    <div className='add-text-form'>
      <input className='input-text' value={text} onChange={(e)=>setText(e.target.value)}></input>
      <button className='add-button' onClick={add_text}>追加</button>
    </div>
  )
}


function ContentList(props){
  return(
    <div className='content-list'>
      {props.textList.map((text,index)=>
        <li className='content' key={text+index}>
          <Content text={text} id={index} deleteState={props.deleteState}/>
        </li>
      )}
    </div>
  )
}


function Content(props){
  return(
    <>
      <button className='content-button' onClick={()=>{props.deleteState(props.id)}}>X</button>
      <div className='content-text-area'>
        <div className='content-text'>
          {props.text}
        </div>
      </div>
    </>
  )
}
