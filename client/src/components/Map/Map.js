/*global google*/
/* eslint-disable no-undef */
import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, SearchBox } from "react-google-maps"
/*import Places from '../Places/Places';*/

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKy4jLW3qzfDbPNZgnBk3_S-I4XvIFH0A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `700px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 32.7766642, lng: -96.79698789999998 }}
  >

    {props.isMarkerShown && <Marker position={{ lat: props.markers.lat , lng: props.markers.lng}} onClick={props.onMarkerClick} />}
      {/*  star liquour*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.781556 , lng: -96.804745 }} onClick={props.onMarkerClick} />}
    {/*total wine and more*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.874457 , lng: -96.768189}} onClick={props.onMarkerClick} />}
    {/*cork wine bar*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.807321576913154 , lng: -96.79625311980499 }} onClick={props.onMarkerClick} />}
    {/*cru wine bar*/}
    {props.isMarkerShown && <Marker position={{ lat:32.807801993948935 , lng: -96.79808378660282 }} onClick={props.onMarkerClick} />}
    {/*wine press*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.790643 , lng: -96.810629 }} onClick={props.onMarkerClick} />}
   {/* total wine*/}
    {props.isMarkerShown && <Marker position={{ lat: 33.097105 , lng: -96.8013128 }} onClick={props.onMarkerClick} />}
    {/*1001 wine and spirits*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.78243739358247 , lng: -96.80573737921887 }} onClick={props.onMarkerClick} />}
    {/*st. martins wine bistro*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.82571444848121 , lng: -96.76996007405668 }} onClick={props.onMarkerClick} />}
   {/* cru food and wine bar*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.844989003744566 , lng: -96.84979755546557 }} onClick={props.onMarkerClick} />}
    {/*cheap ricer liquor beer wine*/}
    {props.isMarkerShown && <Marker position={{ lat: 32.775088223692805 , lng: -96.81276798248291 }} onClick={props.onMarkerClick} />}

  </GoogleMap>

)
    console.log("MAPJS RENDER");

/*class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()

  }


  render() {

    const markers = this.props.markers.map((venue,i) => {
      const marker = {
        position: {
       lat: 32.7766642,
        lng: -96.79698789999998
        }
      }
      return <Marker key={i} {...marker} />
          console.log("MAPJS RENDER");
    })
    return (
      <div className= "mapInfo">
        <Places/>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          googleMapElement={
            <div>
            <SearchBox ></SearchBox>
            </div>
        }
      />
      </div>

    )
  }
}*/

export default MyMapComponent;