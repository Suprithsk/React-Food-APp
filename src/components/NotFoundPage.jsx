import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.text}>
        The page you are looking for might be in another castle. Let's get back{' '}
        <Link to="/" style={styles.link}>
          home
        </Link>
        .
      </p>

      {/* Add any additional content or styling as needed */}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  heading: {
    fontSize: '3em',
    color: '#555',
  },
  text: {
    fontSize: '1.5em',
    color: '#888',
    marginTop: '20px',
  },
  link: {
    color: 'orange',
    textDecoration: 'underline',
  },
};

export default NotFoundPage;
