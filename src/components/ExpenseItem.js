
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { RiAddCircleFill, RiIndeterminateCircleFill } from "react-icons/ri";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><RiAddCircleFill size='1.5em' color='#3ab262' onClick={event=> increaseAllocation(props.name)}>+</RiAddCircleFill></td>
        <td><RiIndeterminateCircleFill size='1.5em' color='#a50101' onClick={event=> decreaseAllocation(props.name)}>+</RiIndeterminateCircleFill></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;