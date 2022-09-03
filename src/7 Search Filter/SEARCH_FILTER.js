import React, { useState } from 'react';
import JsonData from './data.json';
import style from './App.module.css'

function SEARCH_FILTER() {

  const [data, setData] = useState('');

  function handleOnChange(event) {
    setData(event.target.value);
  } 

  function check(obj, data) {
    let len = data.length;
    let st = obj.first_name.toLowerCase();
    st = st.split('').slice(0, len).join('');
    if (data === st) { return true }
    return false;
  }

  return (
    <>
      <div className={style.parent}>
        <input type="text" placeholder='Search...' onChange={handleOnChange} />

        {JsonData.filter((obj) => {
          if (data === '') {
            return obj;
          }
          else if (check(obj, data)) {
            return obj;
          }
        }).map((obj, key) => {
          return (
            <div key={key}>
              <p key={key}>{obj.first_name} </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SEARCH_FILTER;