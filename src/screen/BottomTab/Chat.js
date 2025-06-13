import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Header from '../MainHomeFlow/Homecomponent/Header'

function Chat() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header title="Chat" />
                <Text>Chat</Text>
            </SafeAreaView>
        </>
    )
}

export default Chat