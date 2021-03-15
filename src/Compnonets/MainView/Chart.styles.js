import styled from '@emotion/styled';

export const Chart = styled.div`
    padding: 20px;

`

export const Canvas = styled.div`
    position: relative;
    background-color: white;
    padding: 30px 80px;
    
`
export const buttonPallete = styled.div`
    
`

export const cardButton = styled.button`

    background-color: ${p => (p.selected)?'blue':'white'};
    border: none;
    color: ${p => (p.selected)?'white':'grey'};
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 10px;
    ${'' /* border-top-left-radius: ${p => (p.end == 1)?'10px':'0'};
    border-bottom-right-radius: ${p => (p.end == 2)?'10px':'0'}; */}

    &:focus {
        border: none;
        outline: none;
        border-color: none;
    
    }

    &:active{
        border: none;
        outline: none;
        border-color: none;
    }
    
`