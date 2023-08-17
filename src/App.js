import {Component} from 'react'
import {v4} from 'uuid'


import './App.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class App extends Component {
state = {

isTrue: false,

latestList: [],
website:'',
username:'',
password:'',

isShow: false,

}
listenWebsite = e => {

this.setState({website: e.target.value})

}