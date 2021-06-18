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
        const budgetValue = newincome-expense;
        return {
            budgetValue,
            newincome, expense
        }
    }    
    const totalBudget = budget();
    return (
        <div className="budget_container">
                <div className="budget-desc">
                    <div className="budget-earned">
                        Total Income {totalBudget.newincome}
                    </div>
                    <div className="budget-expense">
                        Total Expense  {totalBudget.expense}
                    </div>
                </div>
                <div className="budget-lable" >
                    Budget  {totalBudget.budgetValue}
                </div>
        </div>
    )
}

export default IncomeLable;