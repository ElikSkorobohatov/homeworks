function Area({filter,counter, object}){
    return (
        <div className="area">
            <div className="filter"><p>{filter}</p><p>{counter}</p></div>
            <div className="object"><p className="text">{object}</p></div>
        </div>

    )
}

export default Area;