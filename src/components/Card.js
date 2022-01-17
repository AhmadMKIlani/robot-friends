import React, { Component } from 'react';


// simple but note best practice for functional
const Card = (props) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img src={ `https://robohash.org/${props.id}?200*200`} alt="avatar" />
            <div className='card-info'>
                <h2>Name: {props.name}</h2>
                <h2>UserName: {props.username}</h2>
                <p>email: {props.email}</p>
            </div>
        </div>
    );
}
export default Card;



// best practice for functional
// const Card = ({id,name,username,email}) =>{
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
//             <img src={ `https://robohash.org/${id}?200*200`} alt="avatar" />
//             <div className='card-info'>
//                 <h2>Name: {name}</h2>
//                 <h2>UserName: {username}</h2>
//                 <p>email: {email}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;


// simple but note best practice for class
// export default class Card extends Component {
//     render() {
//         return (
//             <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
//             <img src={ `https://robohash.org/${this.props.id}?200*200`} alt="avatar" />
//             <div className='card-info'>
//                 <h2>Name: {this.props.name}</h2>
//                 <h2>UserName: {this.props.username}</h2>
//                 <p>email: {this.props.email}</p>
//             </div>
//         </div>
//         )
//     }
// }


// best practice for class
// export default class Card extends Component {
//     render() {
//         const {id,name,username,email}=this.props
//         return (
//             <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
//             <img src={ `https://robohash.org/${id}?200*200`} alt="avatar" />
//             <div className='card-info'>
//                 <h2>Name: {name}</h2>
//                 <h2>UserName: {username}</h2>
//                 <p>email: {email}</p>
//             </div>
//         </div>
//         )
//     }
// }
