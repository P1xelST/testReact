import './app-filter.css';

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудинки', colored: false},
        {name: 'like', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'З/П больше 1000', colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light':'btn-outline-light';
        const redStyle = colored ? {color: 'orange'} : null;
        return (
            <button className={`btn ${clazz}`} 
                    type="button" 
                    key={name}
                    onClick={() => onFilterSelect(name)}
                    style={redStyle}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;