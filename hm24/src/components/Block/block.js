function Input({main_address, add_address, button}) {

    return(
        <div className="input">
            <div className="address_input">
                <div className='address'>{main_address}</div>
                <input type="text" value={add_address}></input>
            </div>
            <button className="btn">{button}</button>
        </div>
    )
}

export default Input;