import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

const User = ({author})=> (
    <div className="UserInfo">
    <img
      className="Avatar"
      src={author.avatarUrl}
      alt={author.name}
    />
    <div className="UserInfo-name">
      {author.name}
    </div>
  </div>
  );
  const Text = ({author})=>{
    author.name = `The comment of ${author.name}`
    return (<div className="Comment-text">{author.name}</div>)
  }
  
  const Date = ({date})=>(
    <div className="Comment-date">
      {formatDate(date)}
    </div>);


function Comment({author, text,date}) {
  return (
    <div className="Comment">
      <Text author = {author}/>
      <User author= {author}/>
      <Date date = {date}/>
    </div>
  );
}

export default Comment;