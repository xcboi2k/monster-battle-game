import React from 'react'
import '../styles/BattleArena.css'

export default function BattleArena() {
  return (
    <div className="battle-arena">
    <div className="enemy-side">
        <HealthBar />
        <MonsterSprite />
    </div>

    <div className="player-side">
        <MonsterSprite />
        <HealthBar />
    </div>
</div>
  )
}
