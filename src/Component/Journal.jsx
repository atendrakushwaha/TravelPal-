// Profile.js
import React, { useState } from 'react';

const Journal = () => {
  const [posts, setPosts] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      const newPost = {
        id: Date.now(),
        type: file.type.startsWith('image/') ? 'image' : 'video',
        src: URL.createObjectURL(file),
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
    } else {
      alert('Please upload a valid image or video file.');
    }
    event.target.value = "";
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId) => {
    const comment = prompt('Enter your comment:');
    if (comment) {
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      ));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-green-500 text-white text-center p-4">
        <h1 className="text-2xl">My Profile</h1>
      </nav>

      <section className="text-center py-8 bg-white">
        <h2 className="text-xl font-semibold">Welcome to My Profile</h2>
        <p className="text-gray-600">Share your favorite moments with the world!</p>
        <input 
          type="file" 
          id="media-upload" 
          accept="image/*, video/*" 
          onChange={handleUpload}
          className="hidden"
        />
        <button 
          onClick={() => document.getElementById('media-upload').click()}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Upload Photo/Video
        </button>
      </section>

      <section className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <Post 
            key={post.id} 
            post={post} 
            onLike={() => handleLike(post.id)} 
            onComment={() => handleComment(post.id)} 
          />
        ))}
      </section>
    </div>
  );
};

const Post = ({ post, onLike, onComment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      {post.type === 'image' ? (
        <img src={post.src} alt="Post" className="w-full h-auto rounded-lg" />
      ) : (
        <video src={post.src} controls className="w-full h-auto rounded-lg" />
      )}
      
      <div className="mt-2 flex justify-between items-center">
        <button 
          onClick={onLike}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
        >
          Like ({post.likes})
        </button>
        <button 
          onClick={onComment}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
        >
          Comment
        </button>
      </div>

      <div className="mt-3">
        {post.comments.map((comment, index) => (
          <p key={index} className="text-sm text-left bg-gray-100 p-2 rounded-lg mt-1">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Journal;
