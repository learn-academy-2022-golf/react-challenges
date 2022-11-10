const Favorites = () => {
    const charlieList = ["RPG", "Anime", "Swords", "Latest Technology", "Cool Drip"]
    const garrettList = ["Coding", "Austin", "Elyse", "Learn", "Golf Cohort"]
    return (
        <>  
            <h2>Charlie's Favorite Things</h2>
            <ul>
                {charlieList.map((thing, index) => {
                    return (
                        <li key={index}>{thing}</li>
                    )
                } )}
            </ul>
            <h2>Garrett's Favorite Things</h2>
            <ul>
                {garrettList.map((thing, index) => {
                    return (
                        <li key={index}>{thing}</li>
                    )
                } )}
            </ul>
        
        </>
    )
}

export default Favorites