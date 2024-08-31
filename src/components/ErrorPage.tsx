import {useRouteError, isRouteErrorResponse} from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        console.log(error.status,error.statusText);
    }
    else{
        console.log(error);
    }
    return(
        <div className="error-message pl-10 pr-10 pt-2 space-y-5 bg-background ">
            <h1>Error</h1>
            <p>An error occured: {isRouteErrorResponse(error) ? `${error.status} ${error.statusText.toString()}`: (error as Error).message}</p>
        </div>
    )
}

export default ErrorPage