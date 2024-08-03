
import css from "./AddProfileForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

    const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    const ProfileValidationSchema = Yup.object().shape({
      profileName: Yup
      .string()
      .required("Ім'я профілю обов'язкове")
      .min(2, "ім'я профілю має бути мінімум 2 символи")
      .max(50, "ім'я профілю має бути меньшим за 50 символів"),

      profileNumber: Yup
      .string()
      .matches(phoneRegExp, "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'")
      .required("Номер телефону є обов'язковий"),

      profileEmail: Yup
      .string()
      .required("Електрона адреса є обов'язковою!")
      .email("Must be a valid email!"),

      profileStatus: Yup
      .string()
      .required("статус є обов'язковим для вибору")
      .oneOf(["online", "offline"]),

      ProlilePhisicalAddress: Yup.bool()
    })

    const INITIAL_VALUES = {
      profileName: "",
      profileNumber: "",
      profileEmail: "",
      profileStatus: "",
      ProlilePhisicalAddress: "false"
    }
    const AddProfileForm = ({onAddProfile}) => {
      const handleSubmit = (values, actions) => {
        const profileObject = {
          name: values.profileName,
          phone: values.profileNumber,
          email: values.profileEmail,
          hasPhisicalAddress: values.profilePhisicalAddress,
          status: values.profileStatus,
          avatar: "https://example.com/avatars/ivan.jpg",
        };
    
        onAddProfile(profileObject);
    
        console.log(values);
        actions.resetForm();
      };
     
  return (
  <Formik 
    initialValues={INITIAL_VALUES} 
    onSubmit={handleSubmit}
    validationSchema={ProfileValidationSchema}>

        <Form className={css.form}> 
          <label className={css.label}>
            <span>Ім&apos;я користувача</span>
            <Field 
            type="text" 
            name="profileName" 
            placeholder=" Іван Залупа"
            required
            />
            <ErrorMessage className={css.errorText} name="profileName" component="span" />
          </label>
      
          <label className={css.label}>
            <span>номер телефону</span>
            <Field 
            type="tel" 
            name="profileNumber" 
            placeholder=" +380936036525"
            required
            />
            <ErrorMessage className={css.errorText} name="profileNumber" component="span" />
          </label>
      
          <label className={css.label}>
            <span>email</span>
            <Field 
            type="email" 
            name="profileEmail" 
            placeholder=" ivpe@gmail"
            required/>
            <ErrorMessage className={css.errorText} name="profileEmail" component="span" />
          </label>
      
          <p>Статус активності:</p>
          <div className={css.label}>
            <label className={css.statusWrap}>
             Онлайн:{" "}
             <Field type="radio" name="profileStatus" value="online" />
            </label>
      
            <label className={css.statusWrap}>
             Офлайн:{" "} 
             <Field type="radio" name="profileStatus" value="offline"/>
            </label>
            <ErrorMessage className={css.errorText} name="profileStatus" component="span" />
          </div>
      
      
          <label className={css.checkboxlabel}>
              <Field type="checkbox" name="ProlilePhisicalAddress" />
              <span> Чи є фізизична адреса?</span>
          </label>
      
          <button  className={css.btnSubmit} type="submit">Add Profile</button>
      
        </Form>
  </Formik>
  )
}

export default AddProfileForm