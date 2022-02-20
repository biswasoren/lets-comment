import React, { useState } from "react"

export function CommentInput(props) {
    return (
        <div className="box">
           <CommentDialog props/>
        </div>
    )
}

export function CommentDialog(props) {
    const [text, setText] = useState('');
    return(<><textarea className="textArea" onChange={(e) => setText(e.target.value)}>{text}</textarea>
            <button className="button" onClick={() => props.saveComment(text)}>Comment</button></>)
}