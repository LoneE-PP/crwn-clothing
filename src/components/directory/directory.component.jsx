import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'


class Directory extends React.Component{
constructor(){
    super();
    this.state = {
        sections: [
            {
            title: "hats",
            imageUrl: "https://images.autods.com/ebay_images/19125-FURTALK-Womens-Beach-Sun-Straw-Hat-UV-UPF50-Travel-Foldable-Brim-Summer-UV-Hat-45879665-5eaa-4745-bb5a-bbf9709f49fd",
            id: 1
        },
        {
            title: "shoes",
            imageUrl: "https://ae01.alicdn.com/kf/HTB1FJUpmwvD8KJjSsplq6yIEFXaj/Women-Fashion-Sneakers-Denim-Canvas-Shoes-Star-Summer-Casual-Shoes-Trainers-Walking-Skateboard-Flats-Tenis-Chaussure.jpg",
            id: 2
        }, {
            title: "jackets",
            imageUrl: "https://th.bing.com/th/id/OIP.2s_s-FeegiOJUcOQBjeGdQHaLH?pid=ImgDet&rs=1",
            id: 3
        }, {
            title: "womens",
            imageUrl: "https://www.orlyshay.com/wp-content/uploads/2014/08/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%99-%D7%91%D7%93%D7%99%D7%9D-2.jpg",
            size: 'large',
            id: 4
        }, {
            title: "mens",
            imageUrl: "https://www.thefashionisto.com/wp-content/uploads/2019/05/Mens-Fashion-Accessories.jpg",
            size: 'large',
            id: 5
        }
    
        ]
    }
}

render()
{
return(
    <div className="directory-menu">
        {this.state.sections.map(({title,imageUrl,id, size}) => ( 
        <MenuItem key={id} title ={title} imageUrl={imageUrl} size={size}/>
        ))}   {/* ved bruk av map, husk key for unik id så react kan oppdatere kun et element*/}
    </div>

);
        } 
}

export default Directory;
