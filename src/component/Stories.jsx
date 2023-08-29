import React from 'react';
import "../css/Stories.css";
import { useGlobalContext } from '../contexts/Context';

export default function Stories() {
  const { hits, isLoading, removePost } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        hits.map((data, index) => (
          <div key={index} className="parent">
            <div className='StoryParent'>
              <h3 style={{ textAlign: "left" }}>
                {data.title}
              </h3>
              <p>By <span>{data.author}</span> | <em><span>{data.num_comments}</span></em> comments</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a href={data.url}>Read More</a>
                <button onClick={() => removePost(data.objectID)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
