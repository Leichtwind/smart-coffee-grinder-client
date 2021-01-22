import React from 'react';
import Layout from '../components/layout';
import Modal from 'react-modal';

export default class Grinding extends React.Component{

    state = {
        displayBtn: true,
        modalIsOpen: false
    }
    onChangeDisplay = () => {
        this.setState({
            displayBtn: !this.state.displayBtn,
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {

       return (

           <Layout>
               {/*<Modal*/}
               {/*    isOpen={this.state.modalIsOpen}*/}
               {/*    onRequestClose={this.closeModal}*/}
               {/*    style={{ width: 300, height: 400, marginLeft: 40, marginTop: -50 }}*/}
               {/*    contentLabel="Example Modal"*/}
               {/*>*/}

               {/*    <h2*/}
               {/*    >Hello</h2>*/}
               {/*    <button className='button' onClick={this.closeModal}>close</button>*/}
               {/*    <div>Are you sure you want to continue?*/}
               {/*        <p>You have already ground 3 servings of coffee.</p>*/}
               {/*        <p>Daily Value: 5-6 servings</p>*/}
               {/*    </div>*/}
               {/*    <button className='button' onClick={this.closeModal}>close</button>*/}
               {/*</Modal>*/}

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
