import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
    
    *{
        padding:0;
        margin:0;
    }
    a{
        text-decoration:none
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background: #f1f1f1;
    }

    html{
        font-size:14px;
    }
`;
