import React from 'react';
import './App.css';
import ButtonInterfaceProps from "./components/ButtonInterfaceProps";
import ButtonTypeProps from "./components/ButtonTypeProps";

function App() {
    const props = {onClick: () => console.log('Custom!'), height: '100px', label: 'Custom Button'}
    return (
        <div className={'container'}>
            <div>
                <div>
                    <h2>
                        Default Button with Interface Props
                    </h2>
                    <ButtonInterfaceProps/>
                </div>
                <div>
                    <h2>
                        Default Button with Type Props
                    </h2>
                    <ButtonTypeProps/>
                </div>
            </div>
            <div>
                <div>
                    <h2>
                        Styled Button with Interface Props
                    </h2>
                    <ButtonInterfaceProps onClick={() => {
                        console.log('So custom')
                    }} height={'100px'} label={'This is a custom button'}/>
                    <ButtonInterfaceProps {...props}/>
                </div>
                <div>
                    <h2>
                        Styled Button with Type Props
                    </h2>
                    <ButtonTypeProps onClick={() => {
                        console.log('So custom')
                    }} width={'300px'} label={'This one is also custom, but with types!'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
