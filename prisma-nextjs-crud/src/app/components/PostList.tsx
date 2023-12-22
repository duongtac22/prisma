import { PostType } from "../types/common";
import Post from "./Post";

const PostList = ({ posts }: { posts: PostType[] }) => {
  //   console.log(posts, "posts in post list");
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-4">
              Post Name
            </th>

            <th scope="col" className="px-4 py-3">
              Created At
            </th>
            <th scope="col" className="px-4 py-3">
              updated At
            </th>
            <th scope="col" className="px-4 py-3">
              Descripton
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: PostType) => {
            return <Post key={post.id} post={post} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
