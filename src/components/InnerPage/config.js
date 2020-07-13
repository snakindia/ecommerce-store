import linkImage1 from '../../assets/images/literature.png'
import linkImage2 from '../../assets/images/literature-v2.png'
import galleryImage1 from '../../assets/images/broucher01.jpg';
import galleryImage2 from '../../assets/images/broucher02.jpg';
import galleryImage3 from '../../assets/images/broucher03.jpg';
import galleryLink from '../../assets/images/mv-bg.png';
import gridImage1 from '../../assets/images/1 (3).jpg';
import gridImage2 from '../../assets/images/1.png';
import gridImage3 from '../../assets/images/1 (4).jpg';
import sliderImage1 from '../../assets/images/Dust Collector Filters.png';
import sliderImage2 from '../../assets/images/binvent.png';

export const downloadBrochure = [
    {
        text: 'Product Literature',
        linkUrl: 'https://drive.google.com/file/d/10xUsIN3fdmX7s_BkzUa8qDUWtq3eFRzw/view?usp=sharing',
        image: {
            url1: linkImage1,
            url2: linkImage2,
            alt: "product-literature",
        },
    },
    {
        text: 'Product Specifications',
        linkUrl: 'https://drive.google.com/file/d/10xUsIN3fdmX7s_BkzUa8qDUWtq3eFRzw/view?usp=sharing',
        image: {
            url1: linkImage1,
            url2: linkImage2,
            alt: "product-specifications"
        },
    },
    {
        text: 'Free Brochures',
        linkUrl: 'https://drive.google.com/file/d/10xUsIN3fdmX7s_BkzUa8qDUWtq3eFRzw/view?usp=sharing',
        image: {
            url1: linkImage1,
            url2: linkImage2,
            alt: "free-brochures",
        },
    }
];
export const galleryBrochure = [
    {
        index: 0,
        image: galleryImage1,
        link: galleryLink,
    },
    {
        index: 1,
        image: galleryImage2,
        link: galleryImage2,
    },
    {
        index: 2,
        image: galleryImage3,
        link: galleryImage3,
    },
    {
        index: 3,
        image: galleryImage2,
        link: galleryImage2,
    }
];
export const imageGrid = [
    {
        image: gridImage1,
        title: 'Baghouse',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
        image: gridImage2,
        title: 'Baghouse',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'

    },
    {
        image: gridImage3,
        title: 'Baghouse',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'

    }
];
export const productSlider = [
    {
        heading: 'Dust Collector Pleated & Cartridge Filters',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        btnText: 'View Detail',
        image: sliderImage1,
    },
    {
        heading: 'Bin Vent Dust Collector',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        btnText: 'View Detail',
        image: sliderImage2,

    },

];
