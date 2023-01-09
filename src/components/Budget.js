import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses } = useContext(AppContext);
    // const { currency } = useContext(AppProvider);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budget, setBudget] = useState(totalExpenses);

    if(budget > 20000) {
        alert("The value cannot exceed 20000 £");
        setBudget("");
        return;
    }

    if(budget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        return;
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
        </div>
    );
};

export default Budget;