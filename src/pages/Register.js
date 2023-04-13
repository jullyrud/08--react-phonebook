
import { AddForm, Input, Label, Button } from '../components/form/Form.styled'
import { Wrap } from '../components/App.styled'
import { register } from 'reduce/auth/authOperations'
import { useDispatch } from "react-redux"

export const Register = () => {
  const dispatch = useDispatch()
  
   const onHandkeSubmit = (evt) => {
    evt.preventDefault()
    const name = evt.target.name.value
    const email = evt.target.email.value
    const password = evt.target.password.value

     dispatch(register({name, email, password}))
     
    evt.target.reset()
  }

    return (
        <Wrap>
        <h2>REGISTRATION</h2>
         <AddForm onSubmit={onHandkeSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
            />
            
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
          type="password"
          name="password"
          pattern="^(?=.*\d)(?=.*[a-zA-Zа-яА-Я])[a-zA-Zа-яА-Я\d]{6,}$"
          title="Phone password must consist of at least 6 characters, one of which must be a number and the rest must be Latin or Cyrillic"
          required
          id="password"
        />
        <Button  type="submit">Register</Button>
      </AddForm>
        </Wrap>
       
       
        
    )


}