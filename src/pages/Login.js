
import { AddForm, Input, Label, Button } from '../components/form/Form.styled'


export const Login = () => {

  const onHandkeSubmit = (evt) => {
    evt.preventDefault()
    const name = evt.target.name.value
    const email = evt.target.email.value
    const password = evt.target.password.value

    console.log({name, email, password});
    evt.target.reset()
  }

    return (
        <>
        <h2>Login</h2>
         <AddForm onSubmit={onHandkeSubmit}>
            
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          pattern="^[\w\-._]+@[\w\-._]+\.[A-Za-z]{2,6}$"
          title=" must include the required character @"
          required
          id="email"
        />
          
        <Label htmlFor="password">Password</Label>
        <Input
          type="text"
          name="password"
          pattern="^(?=.*\d)(?=.*[a-zA-Zа-яА-Я])[a-zA-Zа-яА-Я\d]{6,}$"
          title="Phone password must consist of at least 6 characters, one of which must be a number and the rest must be Latin or Cyrillic"
          required
          id="password"
        />
        <Button  type="submit">Register</Button>
      </AddForm>
        </>
       
       
        
    )


}