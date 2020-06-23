import EPCImg from '../assets/images/baghouse.jpg';
import EquipImg from '../assets/images/valve.jpg';
import PartImg from '../assets/images/fan.jpg';
import BrandImg from '../assets/images/600X500-4.jpg';

import EpcImg1 from '../assets/images/thumbnail-img/item2.jpg';
import EpcImg2 from '../assets/images/thumbnail-img/item1.jpg';
import EpcImg3 from '../assets/images/thumbnail-img/item3.jpg';
import EpcImg4 from '../assets/images/thumbnail-img/item5.jpg';
import EpcImg5 from '../assets/images/thumbnail-img/item4.jpg';
import EpcImg6 from '../assets/images/thumbnail-img/item6.jpg';


const dropDownMenuProduct = [
    {
        EPC:{
            coverImg:EPCImg,
            listItems:[
                {
                    itemName:'Cartridge Dust Collectors',
                    itemImg:EpcImg1
                },
                {
                    itemName:'Baghouse',
                    itemImg:EpcImg2
                },
                {
                    itemName:'Bill gates Bin Vents',
                    itemImg:EpcImg3
                },
                {
                    itemName:'Fans & Blowers',
                    itemImg:EpcImg4
                },
                {
                    itemName:'Portable Dust Collectors',
                    itemImg:EpcImg5
                },
                {
                    itemName:'Fiberglass Filter Bags',
                    itemImg:EpcImg6
                }
                
            ]

        }
    },
    {
        Equipment:{
            coverImg:EquipImg,
            listItems:[
                {
                    itemName:'Steve Jobs Baghouse',
                    itemImg:EpcImg3
                },
                {
                    itemName:'Cartridge Dust Collectors',
                    itemImg:EpcImg2
                },
                {
                    itemName:'Bin Vents',
                    itemImg:EpcImg1
                },
                {
                    itemName:'Portable Dust Collectors',
                    itemImg:EpcImg6
                },
                {
                    itemName:'Fans & Blowers',
                    itemImg:EpcImg4
                },
                
                {
                    itemName:'Fiberglass Filter Bags',
                    itemImg:EpcImg5
                }
                
            ]

        }
    },
    {
        Parts:{
            coverImg:PartImg,
            listItems:[
                {
                    itemName:'Mark Zuckerberg Baghouse',
                    itemImg:EpcImg5
                },
                {
                    itemName:'Cartridge Dust Collectors',
                    itemImg:EpcImg6
                },
                {
                    itemName:'Bin Vents',
                    itemImg:EpcImg4
                },
                {
                    itemName:'Portable Dust Collectors',
                    itemImg:EpcImg1
                },
                {
                    itemName:'Fans & Blowers',
                    itemImg:EpcImg3
                },
                
                {
                    itemName:'Fiberglass Filter Bags',
                    itemImg:EpcImg2
                }
                
            ]

        }
    },
    {
        Brands:{
            coverImg:BrandImg,
            listItems:[
                {
                    itemName:'Larry Page Baghouse',
                    itemImg:EpcImg1
                },
                {
                    itemName:'Cartridge Dust Collectors',
                    itemImg:EpcImg2
                },
                {
                    itemName:'Bin Vents',
                    itemImg:EpcImg6
                },
                {
                    itemName:'Portable Dust Collectors',
                    itemImg:EpcImg3
                },
                {
                    itemName:'Fans & Blowers',
                    itemImg:EpcImg4
                },
                
                {
                    itemName:'Fiberglass Filter Bags',
                    itemImg:EpcImg5
                }
                
            ]

        }
    },


];

const defaultMenuListItems =[
    {
        itemName:'Larry Page Baghouse',
        itemImg:EpcImg1
    },
    {
        itemName:'Cartridge Dust Collectors',
        itemImg:EpcImg2
    },
    {
        itemName:'Bin Vents',
        itemImg:EpcImg6
    },
    {
        itemName:'Portable Dust Collectors',
        itemImg:EpcImg3
    },
    {
        itemName:'Fans & Blowers',
        itemImg:EpcImg4
    },
    
    {
        itemName:'Fiberglass Filter Bags',
        itemImg:EpcImg5
    }
    
] 

export {
    dropDownMenuProduct,
    defaultMenuListItems
}