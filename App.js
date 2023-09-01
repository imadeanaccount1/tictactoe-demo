import React, { Component  } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        text1 : ' ',
        text2 : ' ',
        text3 : ' ',
        text4 : ' ',
        text5 : ' ',
        text6 : ' ',
        text7 : ' ',
        text8 : ' ',
        text9 : ' ',
        
        player : 'X',
    }
    
    render() {
        console.log(this.state.text1 === '')

        return (
            <View style={styles.container}>
                
                <View style={styles.rowContainer}>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text1)} style={styles.box} onPress={() => {this.setState({text1 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text1}
                            {this.state.text1 !== ''}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text2)} style={styles.box} onPress={() => {this.setState({text2 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text2}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text3)} style={styles.box} onPress={() => {this.setState({text3 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text3}
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.rowContainer}>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text4)} style={styles.box} onPress={() => {this.setState({text4 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text4}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text5)} style={styles.box} onPress={() => {this.setState({text5 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text5}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text6)} style={styles.box} onPress={() => {this.setState({text6 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text6}
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.rowContainer}>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text7)} style={styles.box} onPress={() => {this.setState({text7 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text7}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text8)} style={styles.box} onPress={() => {this.setState({text8 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text8}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={['O', 'X'].includes(this.state.text9)} style={styles.box} onPress={() => {this.setState({text9 : this.handleButtonPress()})}}>
                        <Text style={styles.gameText}>
                            {this.state.text9}
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.playerText}>
                    It is {this.state.player}'s turn
                </Text>
                
                <TouchableOpacity style={styles.reset} onPress={() => {this.reset()}}>
                        <Text style={styles.resetText}>
                            Reset
                        </Text>
                    </TouchableOpacity>
                
            </View>
      );
   }
   handleButtonPress ()
    {
        if(this.state.player == 'X' )
        {
            this.setState({player : 'O'});
            return 'X';
        }
        else
        {
            this.setState({player : 'X'});
            return 'O';
        }
    }
    reset()
    {
        this.setState({text1 : ' '});
        this.setState({text1 : ' '});
        this.setState({text2 : ' '});
        this.setState({text3 : ' '});
        this.setState({text4 : ' '});
        this.setState({text5 : ' '});
        this.setState({text6 : ' '});
        this.setState({text7 : ' '});
        this.setState({text8 : ' '});
        this.setState({text9 : ' '});
        
        this.setState({player : 'X'});
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#1e944e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box : {
        flex : 1,
        backgroundColor : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#1e944e',
        borderWidth : 9,
        height : 1.7*(215/3),
        width : 1.7*(215/3),
    },
    gameText : {
        color : '#1e944e',
        fontSize : 50,
        fontWeight : 'bold',
        alignText : 'center',
    },
    playerText : {
        color : 'white',
        fontSize : 40,
        fontWeight : 'bold',
        alignText : 'center',
        margin : 10,
    },
    reset : {
        backgroundColor : '#1e944e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 3.33333333333*4,
        borderWidth : 3.33333333333*2,
        borderColor : 'white',
        marginTop : 10,
        width : 3.33333333333*100,
        height : 1.25*50,
    },
    resetText : {
        color : 'white',
        fontSize : 1.25*20,
        fontWeight : 'bold',
        alignText : 'center',
    },
});