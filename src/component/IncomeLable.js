import React ,{useState}from 'react'
import './incomeLable.css';
const  IncomeLable=(props)=> {
    const [cssclass, setcssclass] = useState('');
    const budget = ()=>{
        var newincome = 0;
        props.income.forEach((item)=>{
            if(item.value){
                console.log(item.value);
                newincome = newincome+item.value;
                console.log(newincome);
            }
            return 0;
        })
        var expense=0;
        props.expense.forEach((item)=>{
            if(item.value){
                expense = expense+item.value;
            }  
            return 0;
        })
        return newincome-expense;
    }    
    const budgetValue = budget();
    return (
        <div className="budget_container">
                <div className="budget-desc">
                    <div className="budget-earned">
                        Total Earned
                    </div>
                    <div className="budget-expense">
                        Total Expense
                    </div>
                </div>
                <div className="budget-lable" >
                    Budget  {budgetValue}
                </div>
        </div>
    )
}

export default IncomeLable;
