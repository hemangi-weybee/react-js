import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
import ComponentF from './ComponentF'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div> ComponentE
            <h3>{user} from {channel}</h3>
            <ComponentF />
        </div>
    )
}

export default ComponentE