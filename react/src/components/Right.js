import React from 'react';
import "../styles/right.scss";

export default function Right() {
  return (
    <div className="right">
      <div className="right__container">

        <div className="right__profile">
          <div className="right__profileCover">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <div className="right__profileImg">
            <img src="https://source.unsplash.com/random?human" alt="" />
          </div>
          <div className="right__profileText">
            <h2>John Smith</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam dicta 
              assumenda, cum rem saepe fugit, vero alias rerum ducimus eos deserunt iure voluptas 
              ea quo esse earum, eligendi veniam.
            </p>
            <button className="btn-primary">View Profile</button>
          </div>
        </div>

        <div className="right__question">
          <h2>Best Question for you.</h2>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
          </div>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>
          </div>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>magni dolores eos qui ratione voluptatem sequi nesciunt</p>
          </div>
          <div className="right__questionItem">
            <div className="right__questionImage"><img src="https://source.unsplash.com/random?woman" alt="" /></div>
            <p>quae ab illo inventore veritatis et quasi architecto beatae vitae</p>
          </div>
        </div>

      </div>
    </div>
  )
}
