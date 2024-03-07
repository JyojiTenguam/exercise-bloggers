import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { posts } from '../data';
import '../styles/Posts.css';

export default function Posts() {
  const { id } = useParams();
  const userId = Number(id);

  const userPosts = posts.filter((post) => post.userId === userId);

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={ post.id } postData={ post } />
        ))}
      </div>
    </div>
  );
}
