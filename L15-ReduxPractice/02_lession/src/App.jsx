import PostsList from "./features/posts/PostsList";
import AddedPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <AddedPostForm />
      <PostsList />
    </main>
  );
}

export default App;
