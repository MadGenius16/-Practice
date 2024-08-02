import css from "./AddProfileForm.module.css"
// {
//   "name": "Іван Петров",
//   "phone": "+380501234567",
//   "email": "ivan.petrov@example.com",
//   "status": "online",
//   "avatar": "https://example.com/avatars/ivan.jpg",
//   "hasPhisicalAddress": false
// }
const AddProfileForm = ({onAddProfile}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements

    const name =formElements.profileName.value;
    const phone =formElements.profileTel.value;
    const email =formElements.profileEmail.value;
    const hasPhisicalAddress =formElements.ProlilePhisicalAddress.checked;
    const status =formElements.profileStatus.value;
    
    const profileObject = {
      name, 
      phone, 
      email, 
      hasPhisicalAddress, 
      status, 
    }
    // console.log(profileObject)

    onAddProfile(profileObject)
    event.currentTarget.reset()
  }


  return (
    <form className={css.form} onSubmit={handleSubmit}> 
 
    <label className={css.label}>
      <span>Ім&apos;я користувача</span>
      <input 
      type="text" 
      name="profileName" 
      placeholder=" Іван Залупа"
      required
      />
    </label>

    <label className={css.label}>
      <span>номер телефону</span>
      <input 
      type="tel" 
      name="profileTel" 
      placeholder=" +380936036525"
      required
      />
      
    </label>

    <label className={css.label}>
      <span>email</span>
      <input 
      type="email" 
      name="profileEmail" 
      placeholder=" ivpe@gmail"
      required/>
    </label>

    <p>Статус активності:</p>
    <div className={css.label}>
      <label className={css.statusWrap}>
       Онлайн <input type="radio" name="profileStatus" value="online" />
      </label>

      <label className={css.statusWrap}>
       Офлайн <input type="radio" name="profileStatus" value="offline"/>
      </label>
    </div>


    <label className={css.checkboxlabel}>
        <input type="checkbox" name="ProlilePhisicalAddress"></input>
        <span> Чи є фізизична адреса?</span>
    </label>

    <button className={css.btnSubmit} type="submit">Add Profile</button>

    </form>
  )
}

export default AddProfileForm