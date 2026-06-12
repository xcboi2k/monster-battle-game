import React from 'react'

export default function BattleLog({ messages }) {
  return (
    <div className="battle-log">
        {messages.at(-1)}
    </div>
  )
}
