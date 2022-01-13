const ErrorPage = (props) => {
  if (props.hasOwnProperty("error")) {
    return (
      <div className="errorMessage">
        <h4>An error has occurred. Here are the specifics</h4>
        <p>Status code: {props.error.response.status}</p>
        <p>Error message: {props.error.response.data.msg}</p>
        <p>
          Use the navigation bar to move to a different page, or refresh the
          page and try again
        </p>
      </div>
    );
  } else {
    return (
      <div className="errorMessage">
        <h1>Sorry, but this page does not exist</h1>
      </div>
    );
  }
};

export default ErrorPage;
