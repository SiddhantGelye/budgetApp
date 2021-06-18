import React from 'react';

import Form from './Form';
import IncomeLable from './IncomeLable';
import Expense from './Expense'
import Income from './Income'

import './App.css'

class App extends React.Component{
    state={
        income:[],
        expense:[],
        budget:0
    }
    
    onFormsubmit =(type,data)=>{
        if(type==='inc'){
            const IncomefilteredArray = [...this.state.income,data];
            this.setState({income:IncomefilteredArray});
        }
        else{
            const expenseFileteredArray = [...this.state.expense,data];
            this.setState({expense:expenseFileteredArray});
        }
    }
    onDelete = (type,data)=>{
        
        if(type==='inc'){
            const newIncomeArray = this.state.income.filter((item)=>{
                return item.desc!==data.desc;
            })
            this.setState({income:newIncomeArray});
        }
        else if(type==='exp'){
            const newExpenseArray = this.state.expense.filter((item)=>{
                return item.desc!==data.desc;
            })
            this.setState({expense:newExpenseArray});
        }
        
    }
    

    render(){
        return(
            <div className="container">
                <div className="budget_lable">
                    <IncomeLable income={this.state.income} expense={this.state.expense} />
                </div>
                <div className="container-form">
                    <Form onFormsubmit={this.onFormsubmit}/>
                </div>
                <div className="list">
                    <div className="inc-list">
                        <Income income={this.state.income} onDelete={this.onDelete}/>
                    </div>
                    <div className="exp-list">
                        <Expense expense={this.state.expense} onDelete={this.onDelete}/>
                    </div>
                </div>
            </div>
        )
    }
} 
export default App;