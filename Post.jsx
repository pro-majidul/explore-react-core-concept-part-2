export default function Post({ post }) {
    const { title, userId, id, body } = post
    return (
        <div className="post">
            <h3>{userId}</h3>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}