import "./App.css";
import Cake from "./components/Cake";
import Counter from "./components/Counter";
import Display from "./components/Display";
import Posts from "./components/Posts";
import Users from "./components/Users";

const App = () => {
    return (
        <>
            <h1>Counter</h1>
            <Counter />
            <Display />
            <Cake />
            <Users />
            <Posts />
        </>
    );
};

export default App;
