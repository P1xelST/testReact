import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name:"Stathem J.", salary:800, increase: false, like:false, id:1},
                {name:"Morphius G.", salary:1900, increase: false, like:false, id:2},
                {name:"Smith A.", salary:400, increase: false, like:false, id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after]

            const newArr = data.filter(el => el.id !== id)
            return {
                data: newArr
            }
        })
    }
    addItem = (evt, newItemEl) => {
        evt.preventDefault();
        let name = newItemEl.name;
        let salary = newItemEl.salary;
        if (name.trim() === '' || salary.trim() === '') {
            return
        }
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState((state) => {
            const newArr = [...state.data, newItem];
            newItemEl.name = '';
            newItemEl.salary = '';
            return {
                data: newArr
            }
        })
    }


    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(el => el.id === id);
        //     const oldObj = data[index];
        //     const newObj = {...oldObj,increase: !oldObj.increase};
        //     const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(item => item.like === true);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase)
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo employees={employees} inc={increased}/>
                <div className="app-search">
                    <AppSearch onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    users={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}/>
                <EmployeeAddForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default App;