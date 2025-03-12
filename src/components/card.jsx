const Card = ({ post, searchValue }) => {
  // Function to highlight the search term in text
  const highlightText = (text) => {
    console.log(searchValue);
    // return;
    if (searchValue == undefined) return text;
    if (!searchValue.trim()) return text;

    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {post.id}. {highlightText(post.title)}
        </h2>
        <p className="text-gray-600">{highlightText(post.body)}</p>
      </div>
    </div>
  );
};
export default Card;
