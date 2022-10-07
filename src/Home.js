import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //let name = "mario";
  //const [name, setName] = useState("mario");

  /* const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }; */

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3333/blogs");
  return (
    <div className="home">
      <h2>Homepage</h2>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("mos")}>Change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
