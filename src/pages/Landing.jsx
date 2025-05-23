import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <p>Welcome to Jobify</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 2rem;
  background-color: #f1f5f8;

  h1 {
    color: #2c3e50;
  }

  p {
    color: #007bff;
  }
`;

export default Landing;
