function DateAndAmountDisplay({ inputClass, handleChange, formData }) {
  const formElements = [
    { name: "date", type: "date" },
    { name: "amount", type: "number" },
  ];

  return formElements.map((el) => {
    return (
      <label
        key={el.name}
        htmlFor={el.name}
        className="block mb-4 w-full text-gray-400 font-medium"
      >
        {el.name.toUpperCase()}
        <input
          type={el.type}
          id={el.name}
          name={el.name}
          className={inputClass}
          placeholder={`Enter ${el.name.toLowerCase()}`}
          onChange={handleChange}
          value={formData[el.name]}
          required
        />
      </label>
    );
  });
}

export default DateAndAmountDisplay;
