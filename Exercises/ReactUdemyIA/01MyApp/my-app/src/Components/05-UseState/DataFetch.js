import React, { useState, useEffect } from "react";

function DataFetch() {
  const [post, setPost] = useState({});
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setPost(resp);
        setErr("");
      })
      .catch(() => {
        setPost({});
        setErr("Xeta var");
      });
  }, []);
  return (
    <div>
      Salamlar
      {err ? err : post.id}
    </div>
  );
}

export default DataFetch;
