import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog main-home pb-100 pt-40 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle=""
                        titleClass="title"
                        title="Վերջին իրադարձությունները"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;