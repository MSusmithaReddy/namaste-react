
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();
    const { error } = err;
    return (
        <>
         <div className='error-text'>Oops! Something Went Wrong</div>
         <h4 className='error-text'>{error?.message}</h4>
         </>
    )
}

export default ErrorPage;