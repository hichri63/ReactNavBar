import React from "react"



function Nav(props) {
    return (
        <li className={props.info.submit ? 'dropdown' : 'none'}>
            <a className={props.info.active ? 'active' : 'none'} href={props.info.link}>
                {props.info.text}
               
             {props.info.submit && <ul className='dropdown-content'>
                {props.info.submit.map(el => <li> {el} </li>)} </ul> }
            </a>
            
            



        </li>
    )
}
export default Nav