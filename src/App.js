import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>t9_ex10_form_validation</h1>
      <p>валидация с помощью чистого react-hook-form</p>
      <p>заготовки полей input и их валидация в одном файле formData</p>
      <Form />
    </div>
  );
}

export default App;
