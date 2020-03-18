export default (props) => 
<div className="App">
    <header>
        <h1>Layout Menu</h1>
        <nav></nav>
    </header>
    {props.children}
    <style jsx>{`
        h1 {
            border-bottom: 1px solid gray;
        }
    `}
    </style>
</div>