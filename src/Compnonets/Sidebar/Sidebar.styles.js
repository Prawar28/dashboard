import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: ${p => p.open ? '20%' : '5%'};
    max-width: 180px;
    min-width: 80px;
    background-color: white;
    position: relative; // Toggler
    transition: .2s ease-in-out all
`

export const SidebarHeader = styled.h3`
  position: relative;
  padding: 20px 5px;
  margin-bottom: 80px;
  font-size: 1rem;
  font-family: Monteserrat;
  text-align: left;
  ${'' /* border-bottom: 1px solid grey; */}
  
`

export const MenuItemContainer = styled.div`
  
`

export const MenuItem = styled.div`

  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: ${p =>( p.itemSelect ? '#0000FF' : 'white')};
  color: ${p =>( p.itemSelect ? 'white' : '')};

  &:hover {
    background-color: #0000FF;
    color: white;
    
    transition: .1s ease-in-out all;
  }

  padding-left: ${p => (p.open ? '0' : '20px')}
`

export const Text = styled.p`
  padding-left: 20px;
  text-align: left;
  
  
`
export const Icon = styled.img`
  ${'' /* height: ${p => (p.open ? '30px' : '30px')}
  width: ${p => (p.open ? '30px': '30px')} */}
  height: 30px;
  width: 30px;
`

export const UserItem = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 6px 20px;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
`
export const TogglerContainer = styled.div`
    position: absolute;
    right: 10%;
    top: 30%;
    cursor: pointer;
`

export const ext = styled.div`
  
`