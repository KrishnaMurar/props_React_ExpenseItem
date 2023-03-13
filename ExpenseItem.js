import './ExpenseItem.css'

  function ExpenseItem(props){
   const title  = "Car Wash";
   const date = new Date(2023/2/20) ;
   const Amount = 500;
   const locationOfExpenditure = "Delhi";
  


    return (
     <div className = "expense-item">
    
    <div>{props.title} </div>
    <div className = "expense-item__description">{props.date.toISOString()}</div>
    <div className = "expense-item__price">RS {props.Amount}</div>
    <div>{props.locationOfExpenditure}</div>
      </div>
    );
  }
 
  export default ExpenseItem