import React from 'react';
import RecentPost from '../../components/Widget/RecentPost';
import MetaWidget from '../../components/Widget/MetaWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

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