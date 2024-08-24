import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../features/posts/postsSlice"

const Posts = () => {
    const dispatch = useDispatch();
    
    const {posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
    <div>
        {loading && <p>Loading..</p>}
        {error && <p>{error}</p>}
        <ul>
            {posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    </div>
  )
}

export default Posts