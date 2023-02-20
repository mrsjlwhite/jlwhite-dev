import { Triangle } from 'react-loader-spinner';

function LoadingIcon() {
    return (
        <div className='loading-icon'>
            <Triangle
                height="150"
                width="150"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    );
}

export default LoadingIcon;