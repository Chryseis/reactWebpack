/**
 * Created by AllenFeng on 2016/7/4.
 */
import JsxComponents from'./test.jsx'

export default class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            "Hello":"xixixi",
            "World":"hah231312ha"
        }
    }

    componentDidMount(){

    }

    render() {
        const {Hello,World}=this.state;
        return <div className="red">
            {Hello}
            <div className="big">
                {World}
                <JsxComponents></JsxComponents>
            </div>
            {this.props.children}
        </div>
    }
}