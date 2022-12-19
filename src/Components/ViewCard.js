import { useParams, useNavigate, useLocation } from "react-router-dom";
import { url } from "../Constants";

export default function ViewCard() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const deletePost = () => {
    fetch(`${url}/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate(`/`);
    });
  };

  const editPost = () => {
    navigate(`/posts/edit/${id}`, {
      state: {
        content: state.content,
      },
    });
  };

  return (
    <div className="card" key={id}>
      <div className="card-body">
        <p className="card-text">{state.content}</p>
        <div>
          <button className="btn btn-primary" onClick={() => editPost()}>
            Изменить
          </button>{" "}
          <button className="btn btn-danger" onClick={() => deletePost()}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
