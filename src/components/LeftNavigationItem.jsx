const LeftNavigationItem = ({title, setSelectedCategory}) => {
    const setSelectedCategoryHandler = () => {
        setSelectedCategory(title)
    }
    return (
        <>
        <div style={{width: "100%", height: "5%", borderTop: "2px solid #dcdcdc", textAlign: "center"}} onClick={setSelectedCategoryHandler}>
            {title}
        </div>
        </>
    )
};

export default LeftNavigationItem;