import Card from "./card";

const PostList = ({ posts, searchValue, noResultsMessage }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">{noResultsMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Card key={post.id} post={post} searchValue={searchValue} />
      ))}
    </div>
  );
};
export default PostList;
