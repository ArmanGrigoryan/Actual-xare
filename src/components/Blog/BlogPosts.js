import React from 'react';
import Slider from "react-slick";
import SingleBlog from './SingleBlog';
import posts from 'data/blog-posts/posts.json';

const BlogPosts = () => {

    const blogSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <Slider {...blogSettings}>
                {posts && posts.map((post, i) => (
                    <div key={i}>
                        <SingleBlog post={post} />
                    </div>
                ))}
            </Slider>
        </React.Fragment>
    );

}

export default BlogPosts;