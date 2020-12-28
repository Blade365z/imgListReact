import React from 'react';
import unsplash from '../api/unsplash';
import Field from './Field';

class App extends React.Component {
    state = { images: [] };
     onSearchSubmit= async (term) =>  {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        
        this.setState({images:response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <Field onSubmit={this.onSearchSubmit}></Field>
                Found: {this.state.images.length} images
            </div>
        );
    }

};
export default App;