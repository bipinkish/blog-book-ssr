import { useSelector } from 'react-redux';

import TimeAgo from './TimeAgo';

import { useParams, Link } from 'react-router-dom';
import { selectPostById } from '../../state/selectors/postSelector';

const SinglePostPage = () => {
    const { postId } = useParams();

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <article className='post-excerpt'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    );
};

export default SinglePostPage;
