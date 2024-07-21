import "./Input.css";

function Input({ valueRef }) {
  return (
    <div className="input">
      <input type="text" ref={valueRef} />
    </div>
  );
}

export default Input;
