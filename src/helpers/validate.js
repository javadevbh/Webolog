const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) {
    errors.name = "وارد کردن نام ضروری است!";
  } else {
    delete errors.name;
  }
  if (!form.email) {
    errors.email = "وارد کردن ایمیل ضروری است!";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "آدرس ایمیل نامعتبر است";
  } else {
    delete errors.email;
  }
  if (!form.text.trim()) {
    errors.text = "وارد کردن متن ضروری است!";
  } else if (form.text.length < 2) {
    errors.text = "متن دیدگاه باید دارای دو کلمه یا بییشتر باشد";
  } else {
    delete errors.text;
  }
  return errors;
};

export default validate;
