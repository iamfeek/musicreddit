import React from 'react';

export default class YoutubeFinder extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: "",
      url: ""
    }

    this._handleTitle = this._handleTitle.bind(this);
    this._handleUrl = this._handleUrl.bind(this);
    this._submit = this._submit.bind(this);
  }

  getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

  _handleTitle(e){
    let title = e.target.value;

    this.setState({title: title});
  }

  _handleUrl(e){
    let url = "https://www.youtube.com/embed/" + this.getId(e.target.value);

    this.setState({url: url});
  }

  _submit(){
    let title = this.state.title;
    let url = this.state.url;
    Meteor.call("links.insert", title ,url);
  }

  render(){
    return(
      <div id="youtube-finder" className="col-xs-12">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.title} onChange={this._handleTitle} className="form-control input-lg" id="url" placeholder="Title" />
        </div>
        <div className="form-group">
          <label htmlFor="url">Youtube URL</label>
          <input type="text" value={this.state.url} onChange={this._handleUrl} className="form-control input-lg" id="url" placeholder="Enter YouTube URL" />
        </div>

        <iframe id="youtube-preview" src={this.state.url} />

        <button className="btn btn-primary" onClick={this._submit}>Submit</button>
      </div>
    )
  }
}
