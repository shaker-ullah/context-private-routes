import { useContext } from "react";
import { AuthContext } from "../Providers/AUthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
console.log(authInfo)
    return (
        <div>
            <h1>This is Home {authInfo.name}</h1>
        </div>
    );
};

export default Home;