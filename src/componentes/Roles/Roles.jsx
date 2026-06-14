import React, {useContext} from "react";
import UserContext from "../../contextos/UserContext";

const Roles = (props) => {

    const user = useContext(UserContext)

    return (
        <aside>
            ROLES <br />
            {props.menu} <br />

            usuario: {user}
        </aside>
    )



}
export default Roles;