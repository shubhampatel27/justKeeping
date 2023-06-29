import React, { useState, useEffect } from "react";

export default function Form() {
  const storedFormValues = localStorage.getItem('form');
  const initialFormValues = storedFormValues ? JSON.parse(storedFormValues) : {
    email: '',
    password: '',
    selectOption: '',
    acceptTerms: false
  };

  const [formData, setFormData] = useState(initialFormValues);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  function getFormData(event) {
    event.preventDefault();
    alert("Form submitted!");
    // Perform any additional actions related to form submission here
    Object.entries(formData).forEach(([key,value])=>{
      localStorage.setItem(key,value);
    })
    setFormData({
    email: '',
    password: '',
    selectOption: '',
    acceptTerms: false
    })

  }
  

  function changeEmail(event) {
    setFormData({
      ...formData,
      email: event.target.value
    });
  }

  function changePassword(event) {
    setFormData({
      ...formData,
      password: event.target.value
    });
  }

  function changeSelectOption(event) {
    setFormData({
      ...formData,
      selectOption: event.target.value
    });
  }

  function toggleAcceptTerms(event) {
    setFormData({
      ...formData,
      acceptTerms: event.target.checked
    });
  }

  return (
    <div>
      <form onSubmit={getFormData}>
        <label htmlFor="email">Email:</label>
        <br />
        <br />
        <input type="email" id="email" value={formData.email} onChange={changeEmail} />
        <br />
        <br />
        <label htmlFor="pass">Password:</label>
        <br />
        <br />
        <input type="password" id="pass" value={formData.password} onChange={changePassword} />
        <br />
        <br />
         <select name="selectOption" id="selectOption" value={formData.selectOption} onChange={changeSelectOption}>
          <option value="">select option</option>
          <option value="Marval">Marval</option>
          <option value="DC">DC</option>
          <option value="Hi Dosto">Hi Dosto</option>
        </select>
        <br />
        <br />
        <input type="checkbox" id="acceptTerms" checked={formData.acceptTerms} onChange={toggleAcceptTerms} />
        <label htmlFor="acceptTerms">Accept Terms and Conditions</label>
        <br />
        <br /> 
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}
