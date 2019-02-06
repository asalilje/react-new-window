import {Component} from 'react';
import ReactDOM from 'react-dom';
import { copyStyles } from "./copyHelper";


class NewWindow extends Component {

    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.externalWindow = null;
    }

    componentDidMount = () => {
        this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
        copyStyles(document, this.externalWindow.document);
        this.externalWindow.document.body.appendChild(this.element);
        this.externalWindow.document.title = this.props.id;
        this.externalWindow.addEventListener("unload", this.handleClose);
    }

    componentWillUnmount = () => {
        this.externalWindow.close();
        this.externalWindow = null;
    }

    handleClose = () => {
        this.props.onClose(this.props.id);
    }
    
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.element
        );
    }

}

export default NewWindow;