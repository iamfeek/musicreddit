import '/imports/api/links/server/publications';

Meteor.startup(function(){
  BrowserPolicy.content.allowFrameOrigin( '*' );
})
