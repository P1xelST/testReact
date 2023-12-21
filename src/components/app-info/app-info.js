
import './app-info.css';

const AppInfo = ({employees, inc}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании - N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {inc.length}</h2>
        </div>
    )
}

export default AppInfo;