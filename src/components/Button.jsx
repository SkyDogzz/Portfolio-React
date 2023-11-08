import styled from "styled-components";

const StyledClearButton = styled.button`
    background: var(--background-color);
    color: var(--primary-color);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.2s ease-in-out;

    &:hover {
        scale: 1.2;
        background: var(--background-color-light);
    }
`

function ClearButton({text, onClick, type, className}){
    return (
        <StyledClearButton className={className} onClick={onClick} type={type}>
            {text}
        </StyledClearButton>
    )
}

export {ClearButton};