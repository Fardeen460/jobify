import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Oh no! Page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
