import React from 'react';
import styles from '../styles/components/News.module.css';

function News() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        // Fetch news from API
        fetch('https://api.yournews.com/latest')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className={styles.news}>
            <h1>News</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default News;
