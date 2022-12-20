import { useEffect, useState } from "react";
import { url } from "../Constants";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function CreateForm({ isEdit }) {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const changeContent = ({ target }) => {
    setContent(target.value);
  };

  const createPost = () => {
    fetch(`${url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: isEdit ? +id : 0,
        content: content,
      }),
    }).then(() =>
      isEdit
        ? navigate(`/posts/${id}`, {
            state: {
              content: content,
            },
          })
        : navigate("/")
    );
  };

  useEffect(() => {
    if (id !== undefined) {
      setContent(state.content);
    }
  }, [id]);

  return (
    <div className="card">
      <div className="card-header">
        <span
          className="close"
          onClick={() => {
            isEdit
              ? navigate(`/posts/${id}`, {
                  state: {
                    content: content,
                  },
                })
              : navigate("/");
          }}
        >
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
        <button className="btn btn-primary" onClick={() => createPost()}>
          Сохранить
        </button>
      </div>
    </div>
  );
}
