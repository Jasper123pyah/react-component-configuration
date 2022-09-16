import ButtonInterfaceProps from "./ButtonInterfaceProps";

type AppProps = {
    label: string;
    onClick: () => void;
    color: string;
    borderRadius: string;
    border: string;
    width: string;
    height: string;
    background: string;
}


const ButtonTypeProps = (props: AppProps) => {
    const {label, onClick, color, borderRadius, border, width, height, background} = props;
    return <div>
        <button
            type={'button'}
            style={{
                color: color,
                borderRadius: borderRadius,
                border: border,
                width: width,
                height: height,
                backgroundColor: background
            }}
            onClick={onClick}
        > {label} </button>
    </div>
}
ButtonTypeProps.defaultProps = {
    label: 'Default',
    state: 'active',
    onClick: () => {
        console.log('Hello World')
    },
    color: '#FFF',
    borderRadius: '20px',
    border: '1px solid black',
    width: 'auto',
    height: '35px',
    background: 'blue'

}
export default ButtonTypeProps;