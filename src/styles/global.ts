import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --green: #29B672;
        --light-green: #96C67F;
        --dirty-green: #74948C;
        --dark-green: #39645C;
        --darker-green: #043433;
        --title-green: #2C5449;

        --bright: #FDFFFA; 
        --cream: #DEE8C6; 
        --yellow: #E6A72F;
        --google: #EA4335;

        --title-gradient: linear-gradient(180deg, #043433 0%, #12816C 100%);
        --icon-gradient: linear-gradient(180deg, #2C5449 0%, #043433 100%);
        --home-gradient: linear-gradient(180deg, rgba(4, 78, 57, 0.65) 0%, rgba(4, 52, 51, 0.65) 100%);     
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
    background-color: var(--bright);
    color: var(--darker-green);
    }

    body, input, button, textarea {
        font: 16px 'Montserrat', sans-serif;
    }
`;