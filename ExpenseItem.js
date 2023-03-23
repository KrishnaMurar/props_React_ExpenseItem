import './ExpenseItem.css'

  function ExpenseItem(props){

    return (
     <div className = "expense-item">
    
    <div>{props.title} </div>
    <div className = "expense-item__description">{props.Date.toISOString()}</div>
    <div className = "expense-item__price">RS {props.Amount}</div>
    <div>{props.locationOfExpenditure}</div>
      </div>
    );
  }
 
  export default ExpenseItem