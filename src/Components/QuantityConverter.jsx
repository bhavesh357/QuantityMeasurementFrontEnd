import React from 'react';
import MainUnit from './MainUnit';
import SubUnit from './SubUnit';

class QuantityConverter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUnit: this.props.units[0].mainUnit,
        };
    }

    render(){

        var units= this.props.units.map(unit => {
            return (
                <MainUnit name={unit.mainUnit} logo={unit.logo} />
            );
        })

        var unit=this.props.units.filter( e => {
            return e.mainUnit===this.state.currentUnit
        });

        return (
            <div className="quantity-converter">
                <div className="svg-icons">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol id="temperature" viewBox="-7 3 45 40"><title>temperature</title><g id="temp-g" transform="translate(-163.707 0)"><path className="a" d="M182.8,35.361V6.97a6.97,6.97,0,0,0-13.94,0V35.361a12.126,12.126,0,1,0,13.94,0Zm0,0" transform="translate(0 0)"/><path className="b" d="M205.539,85.461a8.375,8.375,0,0,1-2.926-16.222V38.992a2.926,2.926,0,1,1,5.852,0V69.24a8.375,8.375,0,0,1-2.926,16.222Zm0,0" transform="translate(-29.706 -32.022)"/><path className="c" d="M202.613,109.871v24.9a8.375,8.375,0,1,0,5.852,0v-24.9Zm0,0" transform="translate(-29.705 -97.551)"/><g transform="translate(186.565 4.432)"><path className="d" d="M373.447,166.5h-5.026a.866.866,0,1,1,0-1.733h5.026a.866.866,0,1,1,0,1.733Zm0,0" transform="translate(-367.554 -150.722)"/><path className="d" d="M370.7,103.878h-2.282a.866.866,0,1,1,0-1.733H370.7a.866.866,0,0,1,0,1.733Zm0,0" transform="translate(-367.555 -95.123)"/><path className="d" d="M371.512,41.256h-3.091a.866.866,0,0,1,0-1.733h3.091a.866.866,0,1,1,0,1.733Zm0,0" transform="translate(-367.555 -39.523)"/><path className="d" d="M371.512,291.741h-3.091a.866.866,0,0,1,0-1.733h3.091a.866.866,0,0,1,0,1.733Zm0,0" transform="translate(-367.555 -261.921)"/><path className="d" d="M370.7,229.12h-2.282a.866.866,0,1,1,0-1.733H370.7a.866.866,0,0,1,0,1.733Zm0,0" transform="translate(-367.555 -206.322)"/></g><path className="e" d="M246.05,134.769v-24.9H240.2v24.9s4.045,1.877,4.045,7.846a8.385,8.385,0,0,1-4.747,7.548,8.374,8.374,0,1,0,6.554-15.394Zm0,0" transform="translate(-67.29 -97.551)"/></g></symbol>
                        <symbol id="length" viewBox="-18 -10 50 40"><title>length</title><g id="length-g" transform="translate(202.615) rotate(90)"><path className="a" d="M10,200.977H53.958v9.832H10Z" transform="translate(-9.107 -9.086)"/><path className="b" d="M341.154,200.977h5.072v9.832h-5.072Z" transform="translate(-310.673 -9.086)"/><path className="c" d="M70.243,301.055a.891.891,0,1,0,.893.891A.893.893,0,0,0,70.243,301.055Z" transform="translate(-63.154 -100.222)"/><path className="c" d="M45.483,191.261a.9.9,0,0,0-.632-.261H.893a.893.893,0,0,0-.893.891v9.833a.893.893,0,0,0,.893.891H3.069a.891.891,0,1,0,0-1.782H1.787v-8.051H5.072v2.307a.893.893,0,0,0,1.787,0v-2.307h3.285v3.985a.893.893,0,0,0,1.787,0v-3.985h3.285v2.307a.893.893,0,0,0,1.787,0v-2.307h3.285v3.985a.893.893,0,0,0,1.787,0v-3.985h2.439v2.307a.893.893,0,0,0,1.787,0v-2.307h3.286v8.051H11.11a.891.891,0,1,0,0,1.782H44.852a.893.893,0,0,0,.893-.891v-9.833a.9.9,0,0,0-.262-.63Zm-14.109,1.521h3.285v8.051H31.374Zm12.584,8.051H36.446v-8.051h3.285v3.985a.893.893,0,0,0,1.787,0v-3.985h2.44Z" transform="translate(0)"/></g></symbol>
                        <symbol id="volume" viewBox="00 00 45 40"><title>length</title><g id="volume-g" transform="translate(-9.25 0.5)"><path className="a" d="M384.755,60.84h-8.421l.228,5.557h5.969v15.86l5.629,2.977V64.245A3.4,3.4,0,0,0,384.755,60.84Z" transform="translate(-332.154 -55.126)"/><path className="a" d="M45.964,0V40.716a7.379,7.379,0,0,1-7.37,7.371H22.765a7.379,7.379,0,0,1-7.371-7.371V12.01L9.75,5.042V0Z" transform="translate(0)"/><path className="b" d="M98.319,223v19.42a7.067,7.067,0,0,1-6.864,7.24H76.714a7.067,7.067,0,0,1-6.864-7.24V223Z" transform="translate(-54.139 -202.056)"/><path className="c" d="M247.593,0V39.9a7.224,7.224,0,0,1-7.208,7.224H232.65V0Z" transform="translate(-201.965 0.478)"/><g transform="translate(20.52 5.98)"><path className="d" d="M283.153,63.667v2.755H279.49V69.24h3.663v2.768H279.49v2.818h3.663v2.4H279.49V80.04h3.663v3.137H279.49v2.818h3.663v2.767H279.49V91.58h3.663v2.768H279.49v2.818h3.663v2.462h2.818V63.667Z" transform="translate(-264.926 -63.667)"/><path className="d" d="M124.417,416.981h2.818v2.8h-2.818Z" transform="translate(-124.417 -383.798)"/><path className="d" d="M171.75,373.8h2.818v2.8H171.75Z" transform="translate(-167.304 -344.676)"/></g></g></symbol>
                    </svg>
                </div>
                <div className="quantity-type">
                    CHOOSE TYPE
                </div>
                <div className="quantity-units">
                    {units}
                </div>
                <div className="quantity-sub-units">
                    <SubUnit message="FROM" subUnits={unit[0].subUnits} />
                    <SubUnit message="TO" subUnits={unit[0].subUnits} />
                </div>
                
            </div>
        );
    }
}

export default QuantityConverter;