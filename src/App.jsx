import React, { Component } from 'react';
import './App.css';

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = "https://picsum.photos/200?photo=";
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {photos: []}
  
  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received
  
  componentDidMount() {
    fetch (PHOTO_LIST_URL)
      .then(res => res.json())
       .then(photoArray => this.setState({photos: photoArray}));
  }

  render() {
    const photos = this.state.photos; 
    return (
      <React.Fragment>
        <header>
          
          <h1>Photo Wall</h1>
        
        </header>
        <div className="collage">
            
            {photos.map( photo => 
                <img alt={photo.filename}
                     key={photo.id}
                     src={PHOTO_URL + photo.id}
                />
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
