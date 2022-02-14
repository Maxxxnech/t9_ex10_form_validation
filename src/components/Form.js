import React, {useState} from "react";
import Input from "./Input";
import formData from "../data/formData";
import { useForm } from "react-hook-form";
import UserDossier from "./UserDossier";


const PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com/posts";

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: 'foo',
      body: data,
      userId: 1,
    })
  });
  return await response.json();
};



export default function Form(props) {
  const [inputsDisabled, setInputsDisabled] = useState(false);

  const [serverResponse, setServerResponse] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (e) => {
    setInputsDisabled(true);
    const result = await postData(PLACEHOLDER_URL, e);
    console.log(result)
    setServerResponse(result.body)
  };

  return (serverResponse? (<UserDossier data={serverResponse}/>): (
    <form onSubmit={handleSubmit(submitHandler)}>
      {formData?.map((el) => (
        <Input
          key={el.name}
          {...el}
          error={errors[el.name]}
          register={register}
          disabled={inputsDisabled}
        />
      ))}
      {/* <Controller
        name="phone-input"
        control={control}
        rules={{
          validate: (value) => isValidPhoneNumber(value),
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="RU"
            id="phone-input"
          />
        )}
      /> */}
      {/* {errors["phone-input"] && <p className="error-message">Invalid Phone</p>} */}
      <button type="submit">Отправить</button>
    </form>)
  );
}
