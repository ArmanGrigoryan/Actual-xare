import React from 'react';
import Commenting from 'comp/Widget/Commenting';
import PostContent from 'comp/Widget/PostContent';
import PostNavigation from 'comp/Widget/PostNavigation';

const BlogDetails = () => {

    return (
        <>
            <PostContent />
            <PostNavigation />
            <Commenting />
        </>
    );
}

export default BlogDetails;