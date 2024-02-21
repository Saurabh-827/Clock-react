let CurrentTime = () => {
    let date = new Date();
    return (
        <div>
            <div className="fw-medium">Current Time is {date.toLocaleDateString()} and {date.toLocaleTimeString()}</div>
        </div>
    );
}

export default CurrentTime;