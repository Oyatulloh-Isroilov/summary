function Block() {
    return (
        <>
        <div className="block">
        <div className="header">
            <h1>Summary</h1>
        </div>
        <div className="block2Hero">
            <div className="reactionBlock">
                <img src="./reaction.svg" alt="icons" />
                <span>Reaction</span>
            </div>
            <div className="memoryBlock">
                <img src="./memory.svg" alt="icons" />
                <span>Memory</span>
            </div>
            <div className="vervalBlock">
                <img src="./verbal.svg" alt="icons" />
                <span>Verbal</span>
            </div>
            <div className="visualBlock">
                <img src="./visual.svg" alt="icons" />
                <span>Visual</span>
            </div>
        </div>
    </div>
        </>
    )
}

export default Block;