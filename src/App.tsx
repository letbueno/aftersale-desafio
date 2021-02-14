import React, {useEffect, useState } from 'react';
import api from './services/api';
import { isBefore,parseISO } from 'date-fns';
import GlobalStyle from './styles/global';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import { lightTheme, darkTheme } from "./styles/theme";
import {Windows} from './windows';
import {Building, Window, Switch, SwitchLabel, SwitchButton, Container, ContainerHeader, BuildingDoor, Door, SunMoon, SunMoonContainer, TurnOnOffContainer} from './styles/styles';

interface Window {
    id: string;
    status: boolean;
  }

const App = () => {

  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const [pos, setPos] = useState(Object);
  const [windows, setWindows] = useState<Window[]>(Windows);
  const [turnLights, setTurnLights] = useState(false);
  const [checked, setChecked] = useState(Boolean);
  
  useEffect(() => {
     
    async function loadTime(): Promise<void> {
    
      const timeNow = new Date(Date.now());
      navigator.geolocation.getCurrentPosition(async function(position){
      
        const location = await api.get(`json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&formatted=0`);
        
        setPos(location.data.results);
       
      },
      async function(error){
        const location = await api.get(`json?lat=-23.5489&lng=-46.6388&formatted=0`);
        setPos(location.data.results);

      })
     
      const sunsetTime = isBefore(parseISO(pos.sunset),timeNow);
      console.log(sunsetTime)
      if(sunsetTime === true){
        setTheme(darkTheme)
      
        windows.forEach(window =>{
          window.status = true;
          setChecked(true);
        })
      }

      else{
        setTheme(lightTheme)
        windows.forEach(window =>{
          window.status = false;
          setChecked(false);
        })
      }
      
     
    }
    loadTime();
  }, [theme, pos.sunset]);

  async function handleTurnOn(id:any) {
    

    windows.forEach((window) =>{
      if(window.id === id){
        window.status = !window.status;
        
      }

    })
   setWindows([...windows]);
   
  };

  async function handleTurnOffOn(){
    
    console.log("chegou");
    setChecked(!checked);
    setTurnLights(!turnLights);
    windows.forEach((window) =>{
      window.status = turnLights;
    })

    
    setWindows([...windows])

    
  }

  return (
    <>
   
     <ThemeProvider theme = {theme}>
       <GlobalStyle/>
       <Container>
           <SunMoonContainer>
              <SunMoon theme = {theme}></SunMoon>
              </SunMoonContainer>
            <ContainerHeader>
              
          <TurnOnOffContainer>
          <h1>
          Turn on/off the lights:
          </h1>
            <SwitchButton>
             
                <Switch  checked ={checked} onChange= {() => handleTurnOffOn()} id="checkbox" type="checkbox">
                
                </Switch>
                
                <SwitchLabel htmlFor="checkbox">
                
                </SwitchLabel>
               
            </SwitchButton>
          </TurnOnOffContainer>
            <Building>
              {windows.map(window =>(
                <Window  key = {window.id} id = {window.id} onClick={() => handleTurnOn(window.id)} active= {window.status}>
                 
                </Window> 
              ))}
             <BuildingDoor>

               <Door/>
               <Door/>
             </BuildingDoor>
            </Building>    
            </ContainerHeader>
        </Container>
     </ThemeProvider>
   
   </>
  );
}


export default App;