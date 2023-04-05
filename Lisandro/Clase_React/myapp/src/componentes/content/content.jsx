import './content.jsx';
import ExampleFunctionComponent from '../exampleComponents/exampleFuncionalComponent.jsx';
import Contador from '../contador/contador.jsx';

const Content = () => {
    return (
        <div className='content'>Content
        <ExampleFunctionComponent name="Valeria" edad="26" />
        <Contador/>
        </div>
    )
}

export default Content;