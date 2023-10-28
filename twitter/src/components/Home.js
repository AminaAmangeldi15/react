import React, {useState} from "react";
import Navigation from "./Navigation";
import Posts from "./datas";
import {Link} from "react-router-dom";
import "./Home.css"
import Footer from "./Footer";

function Home(){
    // function fetchPostById(id) {
    //     return Posts.find((post) => post.id === id);
    // }


    // const handleLikeClick = () => {
    //     const post = fetchPostById()
    //     const [likes, setLikes] = useState(0);
    //     setLikes(likes + 1);
    // };

    const [searchTerm, setSearchTerm] = useState("");
    const filteredPosts = Posts.filter((post) => {
        return (
            (post.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });
    return (
        <div>
            <h2 className='words'>Welcome to Twitter!</h2>
            <div className="date-picker">
                <div className="search-form">
                    <h3>Search Rooms</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="Search by room name or type"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
                <div className="room-cards">
                    { filteredPosts.map((post, index) => (
                        <div className="room-card" key={post.id}>
                            <div className="room-image">
                                <Link to={`/posts/${post.id}`}><img src={post.image} alt={[post].title} /></Link>
                            </div>
                            <div className="room-details">
                                <div className="room-header">
                                    <Link to={`/posts/${post.id}`}><h4 className="link">{post.description}</h4></Link>
                                </div>
                                <div>
                                    <h4>Likes: {post.likes}</h4>
                                    <button onChange={() =>{
                                        post.likes = post.likes + 1
                                    }}>Like</button>
                                </div>
                                <div className="bottom">
                                    <Link to={`/posts/${post.id}`}><h6>Discover more</h6></Link>
                                    <img className='next' src='/next.png' alt='Next' height={18}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Home;