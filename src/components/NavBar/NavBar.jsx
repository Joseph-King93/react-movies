import { Link } from 'react-router-dom';

function NavBar({user}) {
 return (
    <nav>
      {user ?
      <>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
      &nbsp; | &nbsp;
      <Link to="/">Movies</Link>
      &nbsp; | &nbsp;
      <strong className='name'>Hello, {user.name}</strong>
      </>
      :<Link to="/">Login</Link>
      }

    </nav>
  );
}

export default NavBar