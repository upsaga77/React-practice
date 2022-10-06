import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //let name = "mario";
  const [name, setName] = useState("mario");
  const [blogs, setBlogs] = useState(null);

  /* const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }; */

  useEffect(() => {
    fetch("http://localhost:3333/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Homepage</h2>
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("mos")}>Change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
