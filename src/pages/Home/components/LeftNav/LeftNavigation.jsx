import "../../css/bootstrap.min.css"
import "../../css/font-awesome.min.css"
import "../../css/prettyPhoto.css"
import "../../css/price-range.css"
import "../../css/animate.css"
import "../../css/main.css"
import "../../css/responsive.css"

import LeftNavigationItem from "./LeftNavigationItem";
const LeftNavigation = ({setSelectedCategory, selectedCategory}) => {
    return (
        <>
        <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Kategoriler</h2>
              <div className="panel-group category-products" id="accordian">
                {/*category-productsr*/}
                <LeftNavigationItem title={"All"} text={"Bütün Kategoriler"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
                <LeftNavigationItem title={"Sebze"} text={"Sebze"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
                <LeftNavigationItem title={"Meyve"} text={"Meyve"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
              </div>
            </div>
          </div>
        {/* <div style={{width: "20%", height: "100%", display: "flex", flexDirection: "column", paddingTop: "15px"}}>
        <LeftNavigationItem title={"All"} text={"Bütün Kategoriler"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        <LeftNavigationItem title={"Sebze"} text={"Sebze"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        <LeftNavigationItem title={"Meyve"} text={"Meyve"} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigationItem>
        </div> */}
        </>
    )
};

export default LeftNavigation;