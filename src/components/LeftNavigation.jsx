import LeftNavigationItem from "./LeftNavigationItem";
const LeftNavigation = ({setSelectedCategory}) => {
    const setSelectedCategoryHandler = () => {
        setSelectedCategory("All")
    }
    return (
        <>
        <div style={{width: "20%", height: "100%", borderTop: "2px solid #dcdcdc", display: "flex", flexDirection: "column"}}>
        <div style={{width: "100%", height: "10%", textAlign: "center"}} onClick={setSelectedCategoryHandler}> Bütün Kategoriler</div>
        <LeftNavigationItem title={"Sebze"} setSelectedCategory={setSelectedCategory}></LeftNavigationItem>
        <LeftNavigationItem title={"Meyve"} setSelectedCategory={setSelectedCategory}></LeftNavigationItem>
        </div>
        </>
    )
};

export default LeftNavigation;