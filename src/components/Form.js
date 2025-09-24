import React, { useState } from "react";
import "../styles/Form.css";

function Form({ type, onAddRecord }) {
  const initialStates = {
    deliveries: { id: "", date: "", item: "", quantity: "", status: "" },
    sales: { id: "", customer: "", amount: "", status: "" },
    inventory: { id: "", item: "", stock: "", location: "" },
  };

  const [formData, setFormData] = useState(initialStates[type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(formData);
    setFormData(initialStates[type]); // reset form
  };

  const renderFields = () => {
    return Object.keys(formData).map((field) => (
      <div className="form-group" key={field}>
        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
        <input
          type="text"
          id={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
        />
      </div>
    ));
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>
      {renderFields()}
      <button type="submit">Add {type.slice(0, -1)}</button>
    </form>
  );
}

export default Form;
