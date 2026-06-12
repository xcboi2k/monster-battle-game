import React from 'react'

import '../styles/BattleLog.css'

export default function BattleLog({ messages, turn }) {
    return (
        <div className="battle-log">
            <div className="battle-log-header">
                {turn === 'player'
                    ? 'Your turn'
                    : 'Enemy turn'}
            </div>

            <div className="battle-log-body">
                {messages.slice(-3).map((msg, i) => (
                    <div key={i} className="log-line">
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    )
}