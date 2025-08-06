function DescriptionDisplay({ inputClass, handleChange, formData }) {
  return (
    <label
      htmlFor="description"
      className="block mb-4 w-full text-gray-700 font-medium"
    >
      DESCRIPTION
      <textarea
        id="description"
        name="description"
        rows="4"
        className={inputClass}
        placeholder="Enter description..."
        onChange={handleChange}
        value={formData.description}
      />
    </label>
  );
}

export default DescriptionDisplay;
