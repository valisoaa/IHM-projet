function InputForm({ name, type, icon }) {
  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
          name={name}
          id={name}
          placeholder=""
        />
        <label htmlFor={name}>
          {icon} {name}
        </label>
      </div>
    </div>
  );
}

export default InputForm;
