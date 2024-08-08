    function Title({text, type, dataIndex, image}) {

        switch(type){
            case 'primary':
                return <h1>{text}</h1>;
            case 'secondary':
                return <h2>{text}</h2>;
            case 'none':
                return <h5 data-index={dataIndex}>{text}</h5>
            case 'result':
                return <p style={{ fontSize: '24px' }}>{text}</p>;
            case 'image':
                return <img src={image}></img>
            default:
                return null;
        }
}

export default Title;