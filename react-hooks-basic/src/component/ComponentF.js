import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>ComponentF
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        <h4>Usercontext value {user}</h4>
                                        <h4>ChannelContext value {channel}</h4>
                                    </div>
                                )}}
                        </ChannelContext.Consumer>
                    )}}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF