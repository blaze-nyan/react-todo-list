import "./Button.css";
export default function Button({ handleClick }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
