import React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <Main>{location.state.title}</Main>;
    } else {
      return null;
    }
  }
}

export default detail;
