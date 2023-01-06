import React from 'react';
import '../styles/left.scss';

export default function Left() {
  return (
    <div className="left">
      <div className="left__container">

        <div className="left__searchBox">
          <div className="left__searchImg">
            <img src="https://source.unsplash.com/random?man" alt="" />
          </div>
          <div className="left__searchText">
            <input type="text" placeholder="Asks Questions" />
            <div className="left__searchFoot">
              <p><i className="fa fa-light fa-image"></i> Upload photo</p>
              <div className="left__searchBtn">
                <button>Cancel</button>
                <button className="btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>

        <div className="left__post">
          <div className="left__postProfile">
            <img src="https://source.unsplash.com/random?human" alt="" />
            <div className="left__postProfileText">
              <p>St. John Smith</p>
              <p>5 min</p>
            </div>
          </div>
          <div className="left__postBody">
            <p className="left__postDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum, porro necessitatibus perspiciatis 
              tempora placeat laborum temporibus mollitia voluptates hic iusto, corrupti a. Veritatis facere, 
              amet a quaerat quibusdam possimus!
            </p>
            <p className="left__postHash">
              #skincare #beauty #makeup #routine #skin #skinproduct #selfcare #antiaging #skincareproducts #glowingskins
            </p>
            <div className="left__postImg"><img src="https://source.unsplash.com/random" alt="" /></div>
          </div>
          <div className="left__postFooter">
            <div><i class="fa fa-solid fa-heart" style={{color: "red"}}></i> 100+ Like</div>
            <div><i class="fa fa-regular fa-comment"></i> Comment</div>
            <div><i class="fa fa-regular fa-paper-plane"></i> Share</div>
            <div><i class="fa fa-regular fa-bookmark"></i> Save</div>
          </div>
        </div>

        <div className="left__post">
          <div className="left__postProfile">
            <img src="https://source.unsplash.com/random?human" alt="" />
            <div className="left__postProfileText">
              <p>Michel Smith</p>
              <p>5 min</p>
            </div>
          </div>
          <div className="left__postBody">
            <p className="left__postDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum, porro necessitatibus perspiciatis 
              tempora placeat laborum temporibus mollitia voluptates hic iusto, corrupti a. Veritatis facere, 
              amet a quaerat quibusdam possimus!
            </p>
            <p className="left__postHash">
              #skincare #beauty #makeup #routine #skin #skinproduct #selfcare #antiaging #skincareproducts #glowingskins
            </p>
          </div>
          <div className="left__postFooter">
            <div><i class="fa fa-solid fa-heart" style={{color: "red"}}></i> 120+ Like</div>
            <div><i class="fa fa-regular fa-comment"></i> Comment</div>
            <div><i class="fa fa-regular fa-paper-plane"></i> Share</div>
            <div><i class="fa fa-regular fa-bookmark"></i> Save</div>
          </div>
        </div>

      </div>
    </div>
  )
}