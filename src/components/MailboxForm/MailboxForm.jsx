import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}>
                    <option value=""></option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm



