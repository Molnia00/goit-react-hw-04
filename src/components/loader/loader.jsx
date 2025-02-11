import { Hourglass } from 'react-loader-spinner'

function LoaderBeing() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Hourglass
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default LoaderBeing