import React from 'react';
import PropTypes from 'prop-types';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

const Welcome = ({data}) => {
  return (
    <Container>
      <div>Received from api {data.message}</div>
    </Container>
  );
};

Welcome.propTypes = {
  message: PropTypes.shape({})
};

Welcome.defaultProps = {
  message: {}
};

export default Welcome;
