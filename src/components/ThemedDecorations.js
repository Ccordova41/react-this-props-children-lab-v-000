// Code ThemedDecoration Component Here
// In the components/ThemedDecorations.js file, create a
// ThemedDecorations React component.
// This component renders out all of its children, while adding a
// className prop to every child.
import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { className: this.props.theme})
      });

      return(
        <div>
          {childrenWithExtraProp}
        </div>
      )
    }
  }
