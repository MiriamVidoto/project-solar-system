import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <StyledTitle>{headline}</StyledTitle>

    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
