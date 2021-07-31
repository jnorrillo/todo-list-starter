import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

// export default class App extends React.Component {

//     render() {
//         return (
//             <div>my app class</div>
//         )
//     }
// }


export const App = () => {
    return  (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

