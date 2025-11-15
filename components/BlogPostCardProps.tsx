import React, { useState, useEffect } from 'react';
import { HeartIcon, ThreeDotsIcon } from './Icons';

interface BlogPostCardProps {
  imageSrc: string;
  author: string;
  avatarSrc: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  views: number;
  comments: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imageSrc,
  author,
  avatarSrc,
  date,
  readTime,
  title,
  description,
  views,
  comments,
}) => {
  const [viewCount, setViewCount] = useState(views);
  const [commentsList, setCommentsList] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    // Simulate a "view" by incrementing the count when the component mounts
    setViewCount(prevCount => prevCount + 1);
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setCommentsList(prev => [...prev, newComment.trim()]);
      setNewComment('');
    }
  };

  return (
    <article className="flex flex-col md:flex-row gap-8 items-start w-full max-w-4xl mx-auto">
      <div className="md:w-1/2 w-full flex-shrink-0">
        <a href="#blog-post">
        <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
      </a>

      </div>
      <div className="md:w-1/2 w-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <img src={avatarSrc} alt={author} className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <p className="font-semibold text-sm text-gray-800">{author}</p>
              <p className="text-xs text-gray-500">{date} &middot; {readTime}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-800">
            <ThreeDotsIcon className="w-5 h-5" />
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-black mb-2 leading-tight">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        
        <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-xs text-gray-500">
            <div className="flex gap-4">
                <span>{viewCount} views</span>
                <button onClick={() => setShowComments(!showComments)} className="hover:underline cursor-pointer">
                    {commentsList.length} comments
                </button>
            </div>
            <button className="text-gray-400 hover:text-red-500">
                <HeartIcon className="w-5 h-5" />
            </button>
        </div>

        {showComments && (
          <div className="mt-6 w-full">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Comments</h4>
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto pr-2">
              {commentsList.length > 0 ? (
                commentsList.map((comment, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm">
                    <p className="text-gray-700 break-words">{comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-xs italic">No comments yet. Be the first to share your thoughts!</p>
              )}
            </div>
            <form onSubmit={handleCommentSubmit} className="flex gap-2 items-center">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a public comment..."
                className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                aria-label="Add a comment"
              />
              <button
                type="submit"
                className="bg-amber-500 text-black font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors text-sm disabled:bg-amber-300 disabled:cursor-not-allowed"
                disabled={!newComment.trim()}
                aria-label="Post comment"
              >
                Post
              </button>
            </form>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
