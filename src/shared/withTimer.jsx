import React from 'react';

function withTimer(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
    };
}
export default withTimer;
