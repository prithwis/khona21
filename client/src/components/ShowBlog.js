import React, { useEffect } from "react";

function ShowBlog() {

  useEffect(() => {
    window.location.href = "https://parashar21.blogspot.com";
  }, []);

  return (
    <div>
      <h2>B L O G</h2>
    </div>
  );
}

export default ShowBlog;