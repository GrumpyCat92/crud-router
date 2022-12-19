import { useState } from "react";
import { url } from "../Constants";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [content, setContent] = useState(state.content);

  const changeContent = ({ target }) => {
    setContent(target.value);
  };

  const editPost = () => {
    fetch(`${url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        content: content,
      }),
    }).then(() => navigate("/"));
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="close" onClick={() => navigate("/")}>
          x
        </span>
      </div>
      <div className="card-body">
        <textarea
          className="form-control"
          value={content}
          onChange={changeContent}
        />
        <br />
        <br />
        <button className="btn btn-primary" onChange={() => editPost()}>
          Сохранить
        </button>
      </div>
    </div>
  );
}
