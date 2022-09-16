import React from "react";
import '../static/css/App.css';
import Drag2Upload from './Drag2Upload';
import TableWithFilter from './TableWithFilter';

const App = ()=> {
    return (
        <div className="container">
            <Drag2Upload/>
            <TableWithFilter/>
        </div>
    )
}
export default App;