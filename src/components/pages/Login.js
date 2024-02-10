import React from 'react';

const Login = () => {
    const styles = {
        contentDiv: {
          display: "flex",
        },
        contentMargin: {
          marginLeft: "10px",
          width: "100%",
        },
      };
  return ( <div style={styles.contentMargin}>
  <h1 style={{ padding: "20%" }}>This is Login Content Area</h1>
</div>);
};

export default Login;