function NotFound ()
{
    return(
        <div>
            <h1 className="header">Welcome to GameDevelop.io</h1> 
            <img src="images/logo1.svg" alt="logo" className="logomain"/>
            <h2 className="subheader">404 Page Not Found</h2>
        </div>
    );
}
ReactDOM.render(<NotFound />, document.getElementById('content'));