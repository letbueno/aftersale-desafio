import styled from 'styled-components';


interface WindowProps {
    active:boolean
  }


export const TurnOnOffContainer = styled.div`

    
    font-size: 18px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding: 30px;
`;


export const SunMoonContainer = styled.div`

  margin-top: 75px;
  margin-right: 150px;
  display:flex;
  float:right;
`;
export const SunMoon = styled.div`

	width: 150px;
	height: 150px;
 
	background-color: ${(props) => props.theme.sunmoon};
	border-radius: 50%;
	box-shadow:
		0 0 0 20px ${(props) => props.theme.shadow};
	

}


`;

export const Container = styled.div`
    text-align:center;
    width: 100%;
    
    h1{
      font-size: 22px;
    }
   
   }
`;

export const ContainerHeader= styled.header`

    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);

  
    

`;
export const Building = styled.div`

    background: #000;
    height: 100%;
    max-width: 270px;
    display:flex;
    flex-wrap: wrap;
    
    
`;

export const BuildingDoor = styled.div`

    background: #000;
    width: 270px;
    height:320px;
    align-items:end;
    justify-content:center;
    display:flex;

`;

export const Door = styled.div`

    background-color: #778899;
    width:50px;
    height: 150px;
    border: 3px solid #363636;

   


`;
export const Window = styled.div<WindowProps>`

    background:${({active}) => active ? '#8c8a8f': '#ffffff'};
    
    height: 50px;
    width: 50px;
    margin: 20px;
    flex-grow: 1;
    
    
`;

export const SwitchButton= styled.div`
  position: relative;

`;
export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 32px;
  border-radius: 15px;
  background: #F0E68C;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 60px;
  height: 32px;
  &:checked + ${SwitchLabel} {
    background: #4F4F4F;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-left: 32px;
      transition: 0.2s;
    }
  }
`;