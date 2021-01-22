import React from 'react';
import Layout from '../components/layout';
// import Alert from ''

export default class Statistics extends React.Component{

    state = {
        displayBtn: true,
        numberGrinding: true
    }
    onChangeDisplay = () => {
        this.setState({
            displayBtn: !this.state.displayBtn,
        });
    }

    onChangeNumber = () => {
        this.setState({
            numberGrinding: !this.state.numberGrinding,
        });
    }

    render() {

        return (

            <Layout>
                <div className='items-container'>
                    <div className="choice-btn-container"
                         style={{ marginBottom: 100 }}
                    >
                        <text className="text-after-making-choice">
                            You already made { this.state.numberGrinding ? '8' : '0' } cups of coffee
                        </text>
                        <button className="button"
                                onClick={this.onChangeNumber}
                        >
                            Reset Statistics
                        </button>
                    </div>

                    <div className="config-chosen-container"
                         style={{display: this.state.displayBtn ? 'block' : 'none' }}
                    >
                        <text className="text-after-making-choice">
                            It's time to clean your machine
                        </text>

                        <button className="button cancel"
                                onClick={this.onChangeDisplay}
                        >
                            Machine was cleaned!
                        </button>
                    </div>
                </div>


            </Layout>
        );
    }
}
