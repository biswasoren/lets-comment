import React, { useState } from "react";
import { CommentDialog } from "./CommentBox";
import img from "./point.svg";

export function CommentList(props) {
  const { comments } = props;
  const [newComments, setNewComments] = useState(comments);
  return (
    <div className="box">
      {newComments.map((element) => {
        return (
          <div className="main_thread">
            <a className="stick" href="#" alt="jump"/>
            <Reply
              level={element.level}
              comment={element.comment}
              replies={element.replies}
              author={element.author}
            />
          </div>
        );
      })}
    </div>
  );
}

function Actions(props) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const showDialog = () => {
    setShowReplyBox(!showReplyBox);
  };
  return (
    <div className="actions">
      <div style={{ display: "flex" }}>
        <button className="button">Upvote</button>
        <button className="button" onClick={showDialog}>
          Reply
        </button>
      </div>
      {showReplyBox && <CommentDialog />}
    </div>
  );
}

function Reply({ level, comment, replies, author }) {
  const calculateDepth = (level) => Number(level) * 50;
  return (
    <div style={{ marginLeft: `${calculateDepth(level)}px`, position: 'relative' }}>
    <a className="stick" href="#" alt="jump"/>
      <div className="author">
        <img
          className="avatar"
          alt="avatar"
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Close&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Light"
        />{" "}
        <div className="author_name">{author}</div>
      </div>
      <div className="messageBox">
        <img className="point" src={img} alt="point" />
        <div className="comment_text">{comment}</div>
      </div>
      <Actions />
      {replies.map((element) => {
        return (
          <div className="main_thread">            
            <Reply
              level={element.level}
              comment={element.comment}
              replies={element.replies}
              author={element.author}
            />
          </div>
        );
      })}
    </div>
  );
}
