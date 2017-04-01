import React from 'react';

export default LinkItem = props => {
  return(
    <div className="panel panel-default">
      <div className="panel-heading">{props.bro.title}</div>
      <div className="panel-body">
        <iframe id="youtube-preview" src={props.bro.url} />
      </div>
    </div>
  )
}
