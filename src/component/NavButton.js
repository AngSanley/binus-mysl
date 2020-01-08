import React from 'react';

function NavButton(props){
    let icon;

    switch(props.title){
        case "Dashboard":
            icon = {__html: "<svg class='NavIcon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' view-box='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'> <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /><polyline points='9 22 9 12 15 12 15 22' /></svg>"};
            break;
        case "My Package":
            icon = {__html: "<svg class='NavIcon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'> <g clip-path='url(#clip0)'> <path d='M12.0761 15.2088C15.9421 15.2088 19.0761 12.0748 19.0761 8.2088C19.0761 4.34281 15.9421 1.2088 12.0761 1.2088C8.21012 1.2088 5.07611 4.34281 5.07611 8.2088C5.07611 12.0748 8.21012 15.2088 12.0761 15.2088Z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M8.28611 14.0988L7.07611 23.2088L12.0761 20.2088L17.0761 23.2088L15.8661 14.0888' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> </g> <defs> <clipPath id='clip0'> <rect width='24' height='24' fill='white' transform='translate(0.0761108 0.208801)'></rect> </clipPath> </defs> </svg>"};
            break;
        case "Promo":
            icon = {__html: "<svg class='NavIcon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'> <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'></path> <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'></path></svg>"};
            break;
        case "Feedback":
            icon = {__html: "<svg class='NavIcon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'> <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path></svg>"};
            break;
        default:
            icon = {__html: "<svg class='NavIcon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' view-box='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'> <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /><polyline points='9 22 9 12 15 12 15 22' /></svg>"};
    }

    return(
        <a href={props.route} className="NavButton">
        <div dangerouslySetInnerHTML={icon}/>
        <span className="NavText">{props.title}</span></a>
    );
}

export default NavButton;