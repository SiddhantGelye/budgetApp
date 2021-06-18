import React from 'react';
import './income.css'

class Income extends React.Component{
    deleteList = (type,data)=>{
        this.props.onDelete(type,data);
    }
    render(){
        const filetered = this.props.income.map((item)=>{
            if(item){
                return(
                    <div className="wrapper" key={item.desc}>
                        <div className="wrapper-desc">
                            <p>{item.desc}</p>
                        </div>
                        <div className="wrapper-value">
                            <p>{item.value}</p>
                        </div>
                        <span className="delete" onClick={()=>this.deleteList('inc',item)}><i className="fas fa-trash "></i></span>
                    </div>
                )
            }
            return null;
        })
        return(
            <div className="income-list">
                <span className="desc">Income</span>
                {filetered}
            </div>
        )
    }
}
export default Income;