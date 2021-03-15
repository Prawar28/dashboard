import React, {useState, useEffect} from 'react'
import * as s from './MainView.styles';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyChart from './Chart.js';
import MiddleCard from './MiddleCard';

function MainView() {

    const [flexDir, setflexDir] = useState(false);
    
    
    useEffect(() => {
        const updateWindowWidth = () => {
          if (window.innerWidth < 1000) setflexDir(true);
          else setflexDir(false)
        }
    
        window.addEventListener('resize', updateWindowWidth);
    
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, []);

      const cardItem = [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjWusJn8XDoU0w-5iKva9FTiW7GybI81F1A&usqp=CAU',
            decr: 'Understand the power of compounding',
            text: 'Learn Now'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjWusJn8XDoU0w-5iKva9FTiW7GybI81F1A&usqp=CAU',
            decr: 'Track Your Expenses on daily basis',
            text: 'Track Now'
        }
    ]

    const cardItemJSX = cardItem.map((item, index) => {

        return (
            <s.Card>
                <s.cardImg src={item.src} />
                <s.cardText>{item.decr}</s.cardText>
                <s.cardButton>{item.text}</s.cardButton>
            </s.Card>
        )
    })
    
    return (
        <s.MainViewContainer flex={flexDir}>
            <s.Middle flex={flexDir}>
                <s.Navbar>
                    <s.Navitem>
                        <SettingsIcon />
                    </s.Navitem>
                    <s.Navitem>
                        <NotificationsIcon />
                    </s.Navitem>
                </s.Navbar>
                
                 <MyChart />
                 
                 <MiddleCard />

            </s.Middle>
            
            <s.Right>
                
                <s.Navright>
                    <s.Action>
                        Actions
                    </s.Action> 
                </s.Navright>
                    
                <s.CardContainer>
                    {cardItemJSX}
                </s.CardContainer>
            </s.Right>
            
            
        </s.MainViewContainer>
    )
}

export default MainView
