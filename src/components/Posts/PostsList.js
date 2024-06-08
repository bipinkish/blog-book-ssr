import { useDispatch, useSelector } from 'react-redux';

import PostsExerpt from './PostsExerpt';
import { selectAllPosts, selectPostsError, selectPostsStatus } from '../../state/selectors/postSelector';
import { FETCH_POSTS_PENDING } from '../../state/actions/postAction';
import { useEffect } from 'react';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);
    const dispatch = useDispatch()
    useEffect(() => {
        let dataFetched = localStorage.getItem('dataFetched');
        console.log("Data fetch 1 : ", dataFetched);
        if (!dataFetched) {
            dispatch({ type: 'FETCH_POST_DATA' });
            dispatch({ type: 'FETCH_USERS_DATA' });
            localStorage.setItem('dataFetched', 'true');
        }
        dataFetched = localStorage.getItem('dataFetched');
        console.log("Data fetch 2 : ", dataFetched);
    }, []);
    console.log("Posts in UI : ", posts);
    let content;
    // const orderedPosts = posts
    //     .slice()
    //     .sort((a, b) => b.date.localeCompare(a.date));
    content = posts.map((post) => (
        <PostsExerpt className="post-excerpt" key={post.id} post={post} />
    ));

    return <section className="posts-container">{content}</section>;
};

export default PostsList;
