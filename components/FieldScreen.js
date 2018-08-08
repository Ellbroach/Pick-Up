import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FieldPics from './ScreenAnimations/FieldPics'
import Chat from './Chat';

export default class LinksScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fieldName: this.props.navigation.state.params.name
        }
    }

        static navigationOptions = {
            title: `Pier 40`
          }
          ;

      
    

  render() {
      const fieldName = this.props.navigation.state.params.name
    return (
      <ScrollView>
        <View style={styles.imageContainer}>
         <View style={styles.image}>
         <FieldPics/>
         </View>
         </View>
      </ScrollView>
    );
  }
}
const window = Dimensions.get('window')
const styles = StyleSheet.create({
    fieldHeader: {
        fontFamily: 'TrebuchetMS-Bold',
        fontSize: 22,
        paddingTop: window.height*.05,
        textAlign: 'center'
    },
    image: {
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        paddingTop: window.height * .02,
        paddingLeft: window.width*.05 ,
        paddingRight: window.width*.05,
        flex: 1,
    }
})