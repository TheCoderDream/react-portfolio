import ngrx from "../../assets/ngrx.png";


export const THEMES = {
    'react' : {
        backgroundImage: 'https://reactjs.org/logo-og.png',
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'angular': {
        backgroundImage: 'https://christianliebel.com/wp-content/uploads/2016/02/Angular2.png',
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'vue': {
        backgroundImage: 'https://www.valuecoders.com/blog/wp-content/uploads/2017/11/featurednew.jpeg',
        linearGradient: createLinearGradient('#49D191', '#33475F'),
        primaryColor: '#33475F',
        color: '#49D191'
    },
    'node': {
        backgroundImage: 'https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png',
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'rxjs': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: 'https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg',
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
