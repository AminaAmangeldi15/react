import React from "react";
import Posts from "./datas";
import {useParams} from "react-router-dom";

function fetchPostDetailsById(id) {
    return Posts.find((post) => post.id === id);
}

export default function Post(){
    const { id } = useParams();
    const post = fetchPostDetailsById(parseInt(id));

    return (
        <><div className="room-image1">
            <img src={post.image} alt={post.title} />
        </div>

            <div className='info1'>
                <div className='room-card1'>
                    <div className="room-details1">
                        <div className="room-header1">
                            <h4>{post.description}</h4>
                        </div>
                        <p className="room-size1">{post.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );

}
