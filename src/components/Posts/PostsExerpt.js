import TimeAgo from './TimeAgo';
import { Link } from 'react-router-dom';

const PostExerpt = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 80)}...</p>
            <p className="postCredit">
                <Link to={`/post/${post.id}`}>View Post </Link>
            </p>
        </article>
    );
};

export default PostExerpt;
