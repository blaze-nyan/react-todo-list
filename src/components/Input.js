import "./Input.css";
function Input({ value, setValue }) {
  return (
    <div className="input">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
