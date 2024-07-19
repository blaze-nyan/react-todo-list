import "./List.css";

export default function List({ list, heading }) {
  return (
    <div className="list-container">
      <div className="title">{heading}</div>
      <ul className="lists">
        {list.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
}
