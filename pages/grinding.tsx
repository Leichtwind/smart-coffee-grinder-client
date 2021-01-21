import React from 'react';
import Layout from '../components/layout';

export default class Grinding extends React.Component{

    state = {
        displayBtn: true,
    }
    onChangeDisplay = () => {
        this.setState({
            displayBtn: !this.state.displayBtn,
        });
    }

    render() {

       return (

           <Layout>
               <div className='items-container'>
                   <div className="choice-btn-container" style={{display: this.state.displayBtn ? 'initial' : 'none' }}>
                       <button className="button"
                               onClick={this.onChangeDisplay}
                       >
                           One Cup
                       </button>

                       <button className="button"
                               onClick={this.onChangeDisplay}
                       >
                           Two Cups
                       </button>
                   </div>

                   <div className="config-chosen-container" style={{display: !this.state.displayBtn ? 'block' : 'none' }}>
                       <text className="text-after-making-choice">
                           Ready to grind
                       </text>

                       <img className='grinder-img' src="images/grinder.gif"  alt="Coffee Grind"/>

                       <button className="button cancel"
                               onClick={this.onChangeDisplay}
                       >
                           Cancel
                       </button>
                   </div>
               </div>


           </Layout>
       );
   }
}
