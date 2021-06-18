import React from 'react'
import "./expense.css"
class Expense extends React.Component{
    deletelist = (type,data)=>{
        this.props.onDelete(type,data);
    }
    render(){
        const newList = this.props.expense.map((item)=>{
            if(item){
                return(
                    <div className="wrapper" key={item.desc}>
                <div className="wrapper-desc">
                    <p>{item.desc}</p>
                </div>
                <div className="wrapper-value">
                    {item.value}
                </div>
                <span className="delete" onClick={()=>this.deletelist('exp',item)}><i className="fas fa-trash "></i></span>
                </div>
                )
            }
            else{
                return 0;
            }
        })
        return(
            <div className="expense-list">  
            <span className="desc">Expense</span>
            {newList}
            </div>
        )
    }
}
export default Expense;