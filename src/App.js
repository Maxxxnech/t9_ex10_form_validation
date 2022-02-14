import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>t9_ex10_form_validation</h1>
      <p>форма на чистоm <b>react-hook-form</b></p>
      <p>заготовки полей input и их валидация в одном файле formData</p>
      <p>валидация и маска номера телефона при помощи простых regExp</p>
      <Form />
    </div>
  );
}

export default App;
