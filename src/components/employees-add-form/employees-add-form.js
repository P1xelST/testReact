import { Component } from 'react';
import './employees-add-form.css';

class EmployeeAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    render() {
        const {addItem} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавить нового бро 😇</h3>
                <form action="" id="reset" className="add-form d-flex" onSubmit={(evt) => addItem(evt, this.state)}>
                    <input required type="text" name="name" value={name} className="form-control new-post-label" placeholder="Как зовут бро?" onChange={this.onValueChange}/>
                    <input required type="number" name="salary" value={salary} className="form-control new-post-label" placeholder="Сколько хочет мани бро?" onChange={this.onValueChange}/>
                    <button type="submit" className="btn btn-outline-light">Добавить броу</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm;