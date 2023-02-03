import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { commentTask, getTaskComments } from '../../actions/comments.js';

import useStyles from './styles';

const CommentSection = ({ task }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?.rows[0]?.users_id;
    const taskComments = useSelector((state) => state?.comments);
    const [comments, setComments] = useState((state) => state?.comments);
    const id = task[0]?.tasks_id;
    const commentsRef = useRef();

    useEffect(() => {
        dispatch(getTaskComments(id));
    }, [dispatch, id]);
    
    let userName = comment.comment_user;

    const handleClick = async () => {
        const newComments = await dispatch(commentTask(comment, task[0].tasks_id, userId)) 
  
        setComment('');
    };

    useEffect(() => {
        commentsRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [taskComments]);

    return (
        <div>
            <div className={classes.CommentsOuterContainer}>
                <div className={classes.CommentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {taskComments?.map((comment) => (
                    <Typography key={comment.id} gutterBottom variant="subtitle1">
                    <strong>{comment.comment_user}: </strong>
                    {comment.comment_text}
                    </Typography>
                    ))}
                <div ref={commentsRef} />
                </div>
                <div style={{ width: '70%'}}>
                    <Typography gutterBottom variant="h6">Write a Comment</Typography>
                    <TextField 
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                        Comment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection;