import React, { useState } from 'react';
import '../styles/ReusableForm.css';



const ReusableForm = ({ fields, onSubmit, title }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="form-container">
      {title && <h2>{title}</h2>}
      <form onSubmit={handleSubmit} className="form">
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="form-button">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default ReusableForm;
