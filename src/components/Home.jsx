// 1

import ApiTesting from "./ApiTesting";

function Home() {

    function test() {
        return "Test Function";
    }
    const fruits = ["Apple", "Mango", "Pinapple"]
    return (
        <>

            <h1>Home</h1>
            {
                fruits.map(fruit => { return <h1>{fruit}</h1> })
            }
            <ApiTesting/>

        </>
    )
}
export default Home;