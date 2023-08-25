import React from 'react';
import MetaWidget from '../../components/Widget/MetaWidget';
import RecentPostWidget from '../../components/Widget/RecentPostWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

const BlogSidebar = () => {

    return (
        <>
            <RecentPostWidget />
            <CategoriesWidget />
            <MetaWidget />
        </>
    );
}

export default BlogSidebar;