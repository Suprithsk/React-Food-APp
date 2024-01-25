import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div style={bodyStyle}>
        <div style={formContainerStyle}>
          <form style={formStyle}>
            <label style={labelStyle}>Name:</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Email:</label>
            <input type="email" style={inputStyle} />

            <label style={labelStyle}>Message:</label>
            <textarea rows="4" style={textareaStyle}></textarea>

            <button type="submit" style={submitButtonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Define inline styles


const bodyStyle = {
  margin: '16px',
};

const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const formStyle = {
  width: '50%',
  maxWidth: '400px',
};

const labelStyle = {
  display: 'block',
  margin: '8px 0',
  fontSize: '16px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const submitButtonStyle = {
  background: '#FC8019',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default ContactUs;
