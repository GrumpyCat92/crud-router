import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ id, content, created }) {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    setDate(new Date(created * 1000));
  }, [created]);

  return (
    <div
      className="card"
      key={id}
      onClick={() =>
        navigate(`/posts/${id}`, {
          state: {
            content: content,
          },
        })
      }
    >
      <div className="card-body">
        <p className="card-text">Created: {date.toLocaleTimeString("ru-RU")}</p>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
