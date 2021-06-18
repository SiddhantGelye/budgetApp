import React ,{useState,useEffect}from 'react';
import './form.css'
const Form = (props)=>{
    const [type,setType] = useState('');
    const [desc,setdesc] = useState('');
    const [value,setValue] =useState();
    
    const onInputChange= (e)=>{
        setdesc(e.target.value);
    }
    const onValueChange = (e)=>{
        if(e.target.value===''){
            setValue('');
        }
        else{
            setValue(parseInt(e.target.value))
        }
    }
    const setIncome=()=>{
        setType('inc')
    }
    const setExpense=()=>{
        setType('exp');
        // console.log(type);
    }
    const onformsubmit = (e)=>{
        e.preventDefault();
        props.onFormsubmit(type,{desc,value})
        e.target.reset();
        setValue('');
        setdesc('');
        setType('');
    }
    return(
        <div className={`income ${type==='inc'?'back-green':'back-red'}`}>
                <div className="income-form">
                
                <form  className="form-section" onSubmit={onformsubmit}>
                    <div className="input-section">
                        <div 
                            className="btn income-btn"
                            onClick={setIncome}
                        >
                            <p>Income</p>
                        </div>
                        <div 
                            className="btn expense-btn"
                            onClick={setExpense}
                        ><p>Expense</p></div>
                    </div>


                    <div className="form-details">
                        <input 
                            type="text" 
                            placeholder="Enter the Value"
                            value={desc}
                            onChange={onInputChange}
                            className="input-description"
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Enter the Value"
                            className="desc-value"
                            value={value}
                            onChange={onValueChange}
                            required
                        />
                    </div>


                    <button type="submit" className={`btn form-submit ${type==='inc'?'back-green':'back-red'}`} >Add</button>
                </form>    
            
        </div>
        </div>
        

    )
}
export default Form;