import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
`

export const Form = styled.form`
  border-bottom: 0.5px solid #ffffff;
`

export const Input = styled.input`
  height: 100%;
  letter-spacing: 0.1em;
  outline: none;
  ::placeholder {
    opacity: 0.7;
  }
`

export const Submit = styled.button`
  padding: ${p => p.theme.spacing(3)};
  :hover {
    background-color: red;
  }
`