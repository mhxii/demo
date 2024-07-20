function Movie     (props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.release}</td>
        </tr>
    );
}

export default Movie;