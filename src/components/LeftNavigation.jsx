import LeftNavigationItem from "./LeftNavigationItem";
const LeftNavigation = () => {
    return (
        <>
        <div style={{width: "20%", height: "100%", borderTop: "2px solid #dcdcdc", display: "flex", flexDirection: "column"}}>
        <div style={{width: "100%", height: "10%", textAlign: "center"}}> Kategoriler</div>
        <LeftNavigationItem title={"sebze"}></LeftNavigationItem>
        <LeftNavigationItem title={"meyve"}></LeftNavigationItem>
        <LeftNavigationItem title={"?????"}></LeftNavigationItem>
        <LeftNavigationItem title={"?????"}></LeftNavigationItem>
        </div>
        </>
    )
};

export default LeftNavigation;