import React from 'react';
import RecentPost from 'comp/Widget/RecentPost';
import MetaWidget from 'comp/Widget/MetaWidget';
import CategoriesWidget from 'comp/Widget/CategoriesWidget';

const SinglePostSidebar = () => {

    return (
        <>
            <RecentPost />
            <CategoriesWidget />
            <MetaWidget />
        </>
    );
}

export default SinglePostSidebar;