const LeftNavigationItem = ({title, text, setSelectedCategory, selectedCategory}) => {
    const setSelectedCategoryHandler = () => {
        setSelectedCategory(title)
    }
    return (
        <>
        <div className="panel panel-default" style={{backgroundColor: (selectedCategory == title ? "#FE980F" : "white")}}>
            <div className="panel-heading" style={{backgroundColor: (selectedCategory == title ? "#FE980F" : "white")}}>
                <h4 className="panel-title" onClick={setSelectedCategoryHandler} style={{backgroundColor: (selectedCategory == title ? "#FE980F" : "white")}}>
                    <a style={{color: (selectedCategory == title ? "white": "")}}>{text}</a>
                </h4>
            </div>
        </div>
        {/* <div style={{width: "100%", height: "5%", textAlign: "center", backgroundColor: (selectedCategory == title ? "#cacaca":"")}} onClick={setSelectedCategoryHandler}>
            {text}
        </div> */}
        </>
    )
};

export default LeftNavigationItem;