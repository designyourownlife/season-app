import './Info.css';
import React from 'react';

const Info = ({label,text}) => {

  return (
    <div className="ui divided selection list info">
      <a className="item">
        <div className={(label==='Error') ? 'ui horizontal label red' : 'ui horizontal label teal' }>{label}:</div>
        {text}
      </a>
    </div>
  );

}

export default Info;