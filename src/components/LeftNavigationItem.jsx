const LeftNavigationItem = ({title, text, setSelectedCategory, selectedCategory}) => {
    const setSelectedCategoryHandler = () => {
        setSelectedCategory(title)
    }
    return (
        <>
        <div style={{width: "100%", height: "5%", textAlign: "center", backgroundColor: (selectedCategory == title ? "#cacaca":"")}} onClick={setSelectedCategoryHandler}>
            {text}
        </div>
        </>
    )
};

export default LeftNavigationItem;