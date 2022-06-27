import styled from 'styled-components';

const Form = styled.form`
  label {
    margin-bottom: 1rem;
    ${({ theme }) => theme.mixins.fontSize({ tablet: 1.4 })}
  }

  input,
  textarea {
    width: 100%;
    background-color: #292929;
    border: 1px solid #424353;
    border-radius: 2px;
    outline: none;
    padding: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.palette.text.primary};
    height: 4.4rem;
    transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease;
    &::placeholder {
      font-size: 1.6rem;
    }
    &::invalid {
      color: gray;
    }
    &:focus {
      border-color: hsla(132, 53%, 69%, 40%);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5),
        0px 1px 6px rgba(0, 0, 0, 0.25), white;
    }
    // box-shadow: 0px 2px 4px rgb(0 0 0 / 50%), 0px 1px 6px rgb(0 0 0 / 25%);
    border: 1px solid #2e2e2e;
  }
  textarea {
    min-height: 20rem;
  }
`;

export default Form;
