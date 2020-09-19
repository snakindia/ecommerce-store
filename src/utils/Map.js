import React, { Component } from 'react';
import axios from 'axios'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ContactForm from '../components/common/ContactForm'
const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
  maxHeight:'417px'
};

const coords = { lat: 0, lng: 0 };
const googleKey ='AIzaSyB1Bndnjywbdbg4mxA86S-nEgxAVEC4zN0';
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker,
    countryName:''
  };
  onMarkerClick = countryName => this.setState({countryName,modalVisible:true});
  closeModal = () => this.setState({countryName:'',modalVisible:false});
  
   

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };


  toggleModal = (mapProps, map, clickEvent) => {
    console.log(clickEvent);
    const lat =clickEvent.latLng.lat();
    const lng =clickEvent.latLng.lng();
    console.log({lat})
    console.log({lng})
    if(lat && lng){
      this.getCountry(lat,lng)
    }
    
    const { modalVisible } = this.state;
    this.setState({ modalVisible: modalVisible ? false : true })
   
  }
  handleMapReady=(mapProps,map)=> {
    map.setOptions({
      draggableCursor: "default",
      draggingCursor: "pointer"
    });
  }

  getCountry =(lat,lng)=>{
    const url =`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleKey}`;
    axios.get(url).then(res=>{
      console.log(res.data.results)
      if(res && res.data && res.data.results && res.data.results.length > 0){
        let data =res.data.results;
        data =data.pop();
        if(data &&  data.types && data.types.length > 0 && data.types.includes('country')){
          const countryName =data.formatted_address;
          if(countryName){
            this.setState({countryName:countryName})
          }
          
        }
       
      }
    }).catch(e=>{
      console.log(e)
    })
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <>
        <Map
          style={{maxHeight:'411px'}}
          initialCenter={coords}
          google={this.props.google}
          maxZoom={2}
          minZoom={2}
          streetViewControl={false}
          disableDefaultUI={true}
          draggable={false}
          onClick={this.toggleModal}
          onReady={this.handleMapReady}
        >
        <Marker
          name={
            '2415 East Camelback Road, Ste. 700, Phoenix, Arizona, P.O. Box: 6887, Goodyear, Arizona 85338, United States'
          }
          position={{ lat: 33.508057, lng: -112.028742 }}
          onClick={e=>this.onMarkerClick('United States')}
        />
        <Marker
          name={
            'International Sales Office, North, South, & Central America, 801 Brickell Avenue, Suite 900, Miami, Florida, 33131, United States'
          }
          position={{ lat: 41.331989, lng: -74.356819 }}
          onClick={e=>this.onMarkerClick('United States')}
        />
        <Marker
          name={
            'Edifício Candelária Corporate , Rua Candelária, 65, #1600, Rio de Janeiro, Brazil'
          }
          position={{ lat: -22.906847, lng: -43.172897 }}
          onClick={e=>this.onMarkerClick('Brazil')}
        />
        <Marker
          name={
            'International Sales Office - 12 Abba Hillel Street, Suite 1600, 52136 Ramat-Gan, Tel-Aviv, Israel'
          }
          position={{ lat: 31.182882, lng: 34.811615 }}
          onClick={e=>this.onMarkerClick('Israel')}
        />
        <Marker
          name={
            'Africa- Block B & Block C, Metropolitan Park, 8 Hillside Road, Suite 1000 Parktown, Johannesburg, 2196, South Africa'
          }
          position={{ lat: -26.204103, lng: 28.047304 }}
          onClick={e=>this.onMarkerClick('South Africa')}
        />
       
        </Map>
        <MDBModal isOpen={modalVisible} toggle={this.toggleModal} >
        <MDBModalBody>
          <div
            className="  animated fadeIn"
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.closeModal}
            >
              <span aria-hidden="true">×</span>
            </button>
           
            <ContactForm countryName={ this.state.countryName}/>
          </div>
          </MDBModalBody>
        </MDBModal>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:googleKey,
})(MapContainer);
