import styled from 'styled-components';

export const Div = styled.div`
    background-color: #242424;
    color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border-radius: 10px;
    font-size: 2rem;
    padding: 2rem;
    width: 45rem;
`;

export const DisplayStyle = styled.input`
    color: #242424;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    text-align: right;
    display: flex;
    background-color: #f1f1f1;
    border-radius: 0.3rem;
    outline: 0;
    box-shadow: 0 0 0 0;
    border: 0 none;
    padding: 0 1rem;
    height: 3rem;
    width: 40rem;
    margin: auto;
`;

export const Button = styled.button`
    color: #242424;
    font-family: 'Poppins', sans-serif;
    border-radius: 0.2rem;
    margin: 0.5rem 1rem;
    width: 9rem;
    height: 3rem;
    background-color: #f1f1f1;
    border: 0.3rem solid #f1f1f1;
    font-weight: 700;
    display: inline-block;
    font-size: 2rem;

    &:hover {
        background-color: #cccccc;
        border: 0.3rem solid #cccccc;
    }
`;