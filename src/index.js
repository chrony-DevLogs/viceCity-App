import reactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from './redux/store'
import  {BrowserRouter,Switch} from "react-router-dom"
import App from "./App";


reactDom.render(<BrowserRouter><Switch><Provider store={store}><App/></Provider></Switch></BrowserRouter>,document.getElementById("App"));
