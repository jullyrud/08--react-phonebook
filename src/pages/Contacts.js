
import { useEffect } from 'react';
import { Form } from '../components/form/Form'
import { Info } from '../components/info/Info.jsx'
import { Filter } from '../components/filter/Filter'
import { Wrap } from '../components/App.styled'
import { Error } from '../components/Error/Error'
import { useSelector, useDispatch } from "react-redux"
import { selectContacts, visibleContacts } from '../reduce/contacts/selectors'
import { deleteCont } from '../reduce/contacts/operations';
import { fetchContacts } from '../reduce/contacts/operations';

export const Contacts = () => {
    const dispatch = useDispatch();
    const { error } = useSelector(selectContacts)
    const contacts = useSelector(visibleContacts) 
       

  
   useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

function deleteContactFunct(id) {
dispatch(deleteCont(id))
}

return (
    <Wrap>
    
    <Form />
    <h2>Contacts</h2>
    <Filter/>
    {error && <Error text='There is something wrong' />}
    <Info contacts={contacts} 
    deleteContactFunct={deleteContactFunct} />
</Wrap>
)
}


