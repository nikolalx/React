import React from 'react'
import './style.scss'

const CommentSection = ({classNames}) => {
    return (
        <textarea rows="15" cols="100" className={classNames} placeholder='Your comment here... max 400 chars'></textarea>
    )
}

export default CommentSection