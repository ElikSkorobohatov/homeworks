function Title({text, type}) {

    return (
        <div>
            {type === 'primary' ? <h1>{text}</h1> : <h2>{text}</h2>}
        </div>
    );

}

export default Title;