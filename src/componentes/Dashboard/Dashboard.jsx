import React, {useContext} from "react";
import TokenContext from "../../contextos/TokenContext";

const Dashboard = () => {

    const token = useContext(TokenContext)

    return (
        <main>
            MAIN <br />
            {token}
        </main>
    )



}
export default Dashboard;