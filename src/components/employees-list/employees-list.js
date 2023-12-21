import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const  EmployeesList = ({users, onDelete, onToggleIncrease, onToggleLike}) => {
    // console.log(users)
    const elements = users.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                name={item.name} 
                salary={item.salary} 
                increase={item.increase}
                like={item.like}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleLike={() => onToggleLike(id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;