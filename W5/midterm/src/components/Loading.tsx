const Loading = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", margin: 0}}>
            <div className="fulfilling-bouncing-circle-spinner">
                <div className="circle"></div>
                <div className="orbit"></div>
            </div>

        </div>
    )
}

export default Loading