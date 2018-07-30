import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends React.Component {
  //Lifecycle Method
  componentWillMount() {
    axios.get('https:/rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>
          Album List
        </Text>
      </View>
    );
  }
}
