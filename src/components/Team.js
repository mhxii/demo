function Team(props){
    // if(props.trophies>10)
    // return(
    //     <h2 className="alert alert-success">
    //         Team : {props.name}, LDC : {props.trophies}
    //     </h2>
    // );else
    // if(props.trophies<=9 && props.trophies>=1)
    // return(
    //     <h2 className="alert alert-warning">
    //         Team : {props.name}, LDC : {props.trophies}
    //     </h2>
    // );else
    // if(props.trophies==0)
    // return(
    //     <h2 className="alert alert-danger">
    //         Team : {props.name}, LDC : {props.trophies}
    //     </h2>
    // );
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.ldc}</td>
            <td>{props.country}</td>
        </tr>
    );
}

export default Team;