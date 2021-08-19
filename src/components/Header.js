const Header = ({onAdd, showAddTask }) => {
    
    return (
        <header className='header'>
            <h1 >Task Tracker</h1>
            <button className='btn' onClick={onAdd} style= {headerstyle}>{showAddTask ? 'Close' : 'Add'}</button>
        </header>
    )
}


const headerstyle = {
    backgroundColor : 'green',
}

export default Header
