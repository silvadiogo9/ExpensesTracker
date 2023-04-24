import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from "react";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    yearSelected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses


/* {filteredExpenses.length === 0 ? (<p>No expenses found</p>) :
                    (
                        filteredExpenses.map(expense => (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))
                    )
                } */