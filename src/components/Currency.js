import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const [currency] = useState('');
    const [action, setAction] = useState('');
    const { dispatch } = useContext(AppContext);

    const customStyles = {           
        control: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "white" : "#92E499"
        })
    }

    if(action === "dollar") {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: "$",
        });
    }

    return (
        <div className="alert alert-secondary">
        <select styles={customStyles} id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                <option defaultValue>Currency</option>
                <option value="Dollar" name="dollar">$ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                  </select>
                  </div>
    );
};

export default Budget;