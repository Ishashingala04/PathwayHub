import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import Header from '../../MainHomeFlow/Homecomponent/Header'
import IconGrid from './IconGrid'
import SearchBar from './SearchBar'
import EventCard from './EventCard'

function Activity() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header title="Activity" />
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <IconGrid />
                    <SearchBar />
                    <EventCard />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Activity