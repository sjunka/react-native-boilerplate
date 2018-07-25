import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile-rn';

import { TabBar } from 'antd-mobile-rn';


const TabBarItem = TabBar.Item;
const FlexItem = Flex.Item;


export default class App extends React.Component {
  render() {
    
    return (
      <WingBlank style={{ marginTop: 10 }}>
          <Flex>
            <FlexItem style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button>FlexItem #1</Button>
            </FlexItem>
            <FlexItem style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button>FlexItem #2</Button>
            </FlexItem>
            <FlexItem style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button>FlexItem #3</Button>
            </FlexItem>
            <FlexItem style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button>FlexItem #4</Button>
            </FlexItem>
          </Flex>
        </WingBlank>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     width: "100%",
//     height: "100%",
//     flexDirection: "row",
//     flexWrap: "nowrap",
//     backgroundColor: '#cfd8dc',
//     alignItems: "flex-start",
//     justifyContent: "flex-start"
//   },
// });

