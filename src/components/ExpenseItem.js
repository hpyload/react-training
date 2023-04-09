import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
    // props is a parameter (object) which holds all received attributes as properties
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;