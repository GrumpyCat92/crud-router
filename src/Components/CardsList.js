import { useEffect, useState } from "react";
import { url } from "../Constants";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function CardsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${url}/posts`)
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <Link to="/posts/new" className="btn btn-primary create">
        Создать пост
      </Link>
      {posts.map((post) => (
        <Card id={post.id} content={post.content} created={post.created} />
      ))}
    </>
  );
}
