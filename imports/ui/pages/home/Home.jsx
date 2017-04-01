import React from 'react';
import YoutubeFinder from './YoutubeFinder';
import {createContainer} from 'react-meteor-data';
import {Links} from '/imports/api/links/links';
import LinkItem from '/imports/ui/components/LinkItem';

function Home(props){
  if(props.loading) return <h1>WAAAAAAIT!</h1>

  return(
    <div className="row">
      <div className="page-header">
        <h1>Home</h1>
      </div>

      <div className="row">
        <YoutubeFinder />
        <hr />
      </div>

      <div className="row">
        {
          props.links.map(function(l){
            return <LinkItem bro={l} />
          })
        }
      </div>
    </div>
  )
}

export default createContainer(() => {
  let handle = Meteor.subscribe("links.all");
  let links = Links.find().fetch();

  return {
    loading: !handle.ready(),
    links: links
  }
}, Home)
