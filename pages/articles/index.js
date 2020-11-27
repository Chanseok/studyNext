import ArticleList from '../../component/views/ArticleList';
import React from 'react';

export default function Page(props) {
    return (
        <ArticleList {...props} />
    );
}

Page.getInitialProps = async function () {
    // await axios.get ?
    return {
        list : ["test0", "test1"],
    }
}