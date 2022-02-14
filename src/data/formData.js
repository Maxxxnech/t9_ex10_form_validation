const formData = [
  {
    label: "Фамилия",
    name: "surname",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Пожалуйста, введите вашу фамилию", // JS only: <p>error message</p> TS only support string
      },
      maxLength: {
        value: 50,
        message: "Не более 50 символов", // JS only: <p>error message</p> TS only support string
      },
    },
  },
  {
    label: "Имя",
    name: "firstname",
    type: "text",
    validation: {
        required: {
          value: true,
          message: "Пожалуйста, введите ваше имя", 
        },
        maxLength: {
          value: 50,
          message: "Не более 50 символов", 
        },
      },
  },
  {
    label: "Отчество",
    name: "patronymic",
    type: "text",
    validation: {
        required: {
          value: true,
          message: "Пожалуйста, введите ваше отчество", 
        },
        maxLength: {
          value: 50,
          message: "Не более 31 символов",
        },
      },
  },
  {
    label: "Дата рождения",
    name: "dateOfBirth",
    type: "date",
    validation: {
        required: {
          value: true,
          message: "Пожалуйста, введите вашу дату рождения", 
        },pattern: {
          value: /(19|20)\d\d-\d\d-\d\d/, //input вернет формат '1999-06-03'
          message: "Пожалуйста, введите корректную дату рождения"
        }
      },
  },
  {
    label: "Телефон",
    name: "phone",
    type: "tel",
    autocomplete: "tel",
    validation: {
        required: {
          value: true,
          message: "Пожалуйста, введите ваш номер телефона", 
        },
        pattern: {
          value: /\+7\([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}/,
          message: "Пожалуйста, введите корректный номер телефона в формате (NNN) NNN NN NN"
        }
      },
    // Маска для номера //
    onChange: function(e){
      e.target.value = e.target.value
      .replace(/[^0-9+]/g, '') // Оставить только цифры и знак "плюс"
      .replace(/^(\d)/, '+7($1')
      .replace(/^\+7(\d)/, '+7($1')
      .replace(/^(\+7\(\d{3})(\d)/, '$1) $2')
      .replace(/(\d{3})(\d{2})(\d{2})\d+?$/, '$1 $2 $3')    
  } 
    //pattern: "+7([0-9]{3}) [0-9]{3} [0-9]{2} [0-9]{2}"
  },
  {
    label: "E-mail",
    name: "email",
    type: "email",
    validation: {
        required: {
          value: false,
          message: "Пожалуйста, введите ваш адрес электронной почты", 
        },
        pattern: {
            //https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Пожалуйста, введите корректный адрес"
          }
      },
  },
];

export default formData;
