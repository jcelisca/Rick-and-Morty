import { Fragment } from "react";
const Characters = ({personaje=[]}) => {


    return (
        <Fragment>
            <div className="row">
                {
                    personaje.map((item, i)=>(
                        <div key={i} className="col">
                            <div className="card">
                                <img src={item.image}/>
                                <p className="card-title">{item.name}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="col"></div>
            </div>
        </Fragment>
     );
}

export default Characters;