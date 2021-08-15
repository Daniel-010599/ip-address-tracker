function Information(props){
    return(
        <div className="container-information">
            <div className="margin">
                <div className="information">
                    <div className="information-item ip-address">
                        <p>IP ADDRESS</p>
                        <h4>{props.information.ip}</h4>
                    </div>
                    <div className="col">
                        <label></label>
                    </div>
                    <div className="information-item location">
                        <p>LOCATION</p>
                        <h4>{props.location.city}, {props.location.region} {props.location.postalCode}</h4>
                    </div>
                    <div className="col">
                        <label></label>
                    </div>
                    <div className="information-item timezone">
                        <p>TIMEZONE</p>
                        <h4>UTC{props.location.timezone}</h4>
                    </div>
                    <div className="col">
                        <label></label>
                    </div>
                    <div className="information-item">
                        <p>ISP</p>
                        <h4>{props.information.isp}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;