import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailbox List</h2>
            
                <ul>
                    {props.mailboxes.map((currentMailbox) => (
                        <div className="mail-box">
                        <li key={currentMailbox._id}>
                            <Link to={`/mailboxes/${currentMailbox._id}`}>
                                Mailbox {currentMailbox._id}
                            </Link>
                        </li>
                        </div>
                    ))}
                </ul>
            
        </>
    )
}

export default MailboxList;

