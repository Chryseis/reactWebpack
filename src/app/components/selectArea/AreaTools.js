/**
 * Created by AllenFeng on 2016/12/9.
 */
import {connect} from 'react-redux';
import AreaContainer from './AreaContainer';
import * as Action from '../../actions/Citys';

@connect(state=>({
    provinces:state.citys.provinces,
    citys:state.citys.citys,
    subdistricts:state.citys.subdistricts,
    showProvince:state.citys.showPro,
    showCitys:state.citys.showCitys,
    showSubdistricts:state.citys.showSub
}),dispatch=>({
    getProvinces:()=>(dispatch(Action.getProvinces())),
    getCitys:(citys)=>(dispatch(Action.getCitys(citys))),
    getSubdistricts:(subdustricts)=>(dispatch(Action.getSubdistricts(subdustricts)))
}))
export default class AreaTools extends React.Component{

    constructor(props){
        super(props);
        props.getProvinces();
    }

    render(){
        const {provinces,citys,subdistricts,getCitys,getSubdistricts,showProvince,showCitys,showSubdistricts}=this.props;
        return <div style={{width: '800px',height: '600px',border: 'solid'}}>
            <div className="area-content">
                <input type="text" style={{width:300}} />
                    <div className="area-container">
                        <div className="area">
                            <ul className="area-tools clearfix">
                                <li className={classnames({'area-province':true,active:!showProvince})}>选择省份</li>
                                <li className={classnames({'area-citys':true,active:!showCitys})}>选择城市</li>
                                <li className={classnames({'area-subdistrict':true,active:!showSubdistricts})}>选择区县</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <AreaContainer item={provinces} getCell={getCitys} show={showProvince}/>
            <AreaContainer item={citys} getCell={getSubdistricts} show={showCitys}/>
            <AreaContainer item={subdistricts} show={showSubdistricts}/>
        </div>
    }
}