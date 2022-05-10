import { useState, useEffect } from 'react';

import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

function Comments(props) {
  const { productId } = props;

  // const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('/api/comments/' + productId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
      });
  }, []);

  // function toggleCommentsHandler() {
  //   setShowComments((prevStatus) => !prevStatus);
  // }

  function addCommentHandler(commentData) {
    fetch('/api/comments/' + productId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      {/* <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button> */}
      <NewComment onAddComment={addCommentHandler} />
      <CommentList items={comments} />
    </section>
  );
}

export default Comments;
