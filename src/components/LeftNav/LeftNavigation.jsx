import LeftNavigationItem from "./LeftNavigationItem";
const LeftNavigation = ({setSelectedCategory, selectedCategory}) => {
    return (
        <>
        <div style={{width: "20%", height: "100%", display: "flex", flexDirection: "column", paddingTop: "15px"}}>
        <LeftNavigationItem title={"All"} text={"Bütün Kategoriler"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        <LeftNavigationItem title={"Sebze"} text={"Sebze"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        <LeftNavigationItem title={"Meyve"} text={"Meyve"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        </div>
        </>
    )
};

export default LeftNavigation;