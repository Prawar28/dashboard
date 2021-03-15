import styled from '@emotion/styled';

export const MainViewContainer = styled.div`

  display: flex;
  flex-grow: 1;
  flex-direction: ${p => p.flex ? 'column': 'row'};
  background-color: #f6f6f6;
  h1 {
    font-size: 2rem
  }

`

export const Middle = styled.div`
    width:  ${p => p.flex ? '100%': '80%'};
`

export const Navbar = styled.div`
    width: 100%;
    background-color: white;
    border-left: solid 2px #f6f6f6;

    display: flex;
    justify-content: flex-end;
`

export const Right = styled.div`
    flex-grow: 1;
    background-color: white;
    border-left: solid 2px #f6f6f6;
`

export const Navitem = styled.div`
    border-left: solid 2px #f6f6f6;
    height: 100%;
    padding: 10px;
`
export const Navright = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-bottom: solid 2px #f6f6f6;
    font-family: serif;
`

export const Action = styled.button`
    color: white;
    
    background-color: #0000FF;
    border-radius: 5px;
    border: none;
    display: flex;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #79a3b1;
    }
`
export const CardContainer = styled.div`
    background-color: white;
    padding: 20px;
`

export const Card = styled.div`
    background-color: #f6f6f6;
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    font-family: serif;
`

export const cardImg = styled.img`
    width: 100px;
    height: 100px;
`
export const cardText = styled.p`
    font-family: serif;
    color: grey;
    font-size: 0.8rem;
    padding-top: 10px;
`
export const cardButton = styled.button`

    background-color: #0000FF;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
    &:hover {
        background-color: #79a3b1;
    }
`