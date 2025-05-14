import { useParams } from 'react-router';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams()

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ))
    return (
        <>
            {!selectedBox ? (
                <h2>Mailbox Not Found!</h2>
            ) : (
                <>
                    <h1>Mailbox {selectedBox._id}</h1>
                    <h2>Details</h2>
                    <dl>
                        <dt>Boxholder: {selectedBox.boxOwner}</dt>
                        <dt>Box Size: {selectedBox.boxSize}</dt>
                    </dl>
                </>
            )
            }
        </>
    )
}

export default MailboxDetails